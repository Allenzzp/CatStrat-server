const path = require("path");
const PATH = path.resolve(__dirname, "../.env.build");

require("dotenv").config({ path: PATH });

let dbParams = {};

// if (process.env.buildbuildDATABASE_URL) {
//   dbParams.connectionString = process.env.buildDATABASE_URL;
// } else {
  
// }

dbParams = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
};

module.exports = dbParams;
