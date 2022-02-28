// load .env data into process.env
require('dotenv').config();

// other dependencies
const fs = require('fs');
const chalk = require('chalk');
// const Client = require('pg-native');
const { Client } = require("pg");
const db = new Client(
  { connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  }
);
const Axios = require("axios");
//stock symbols setup
const finnhub = require('finnhub');
const stock = require('../routes/stock.js');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

// PG connection setup
// const connectionString = process.env.DATABASE_URL ||
//   `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
// const client = new Client();

// Loads the schema files from db/schema
const runSchemaFiles = async () => {
  console.log(chalk.cyan(`-> Loading Schema Files ...`));
  const schemaFilenames = fs.readdirSync('./db/schema');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/schema/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    await db.query(sql);
  }
};

const runSeedFiles = async () => {
  console.log(chalk.cyan(`-> Loading Seeds ...`));
  const schemaFilenames = fs.readdirSync('./db/seeds');

  for (const fn of schemaFilenames) {
    const sql = fs.readFileSync(`./db/seeds/${fn}`, 'utf8');
    console.log(`\t-> Running ${chalk.green(fn)}`);
    await db.query(sql);
  }
};

const getStockSymbols = async () => {
  function generateQuerySyntax(num) {
    let res ="";
    for (let i = 1; i < num; i++) {
      res += `($${i}), ` //9
    }
    res += `($${num})`;
    return res;
  }
  const symbolLists = []
  Axios.get("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=c87b1maad3i9lkntitsg")
    .then(res => {
      const stockObjs = res.data;
      stockObjs.map(stockObj => {
        if (stockObj.type === "Common Stock") {
          symbolLists.push(stockObj.symbol);
        }
      });
      const subQuery = generateQuerySyntax(symbolLists.length);
      const query = `INSERT INTO stocks (stock_symbol) VALUES ${subQuery};`;
      db.query(query, [...symbolLists], (err, res) => {
        console.log(err);
        db.end();
      });
    })
}

const runResetDB = async () => {
  try {
    await db.connect();
    // await client.connectSync(connectionString);
    await runSchemaFiles();
    await runSeedFiles();
    await getStockSymbols();
    // db.end();
  } catch (err) {
    console.error(chalk.red(`Failed due to error: ${err}`));
    db.end();
  }
};

runResetDB();


