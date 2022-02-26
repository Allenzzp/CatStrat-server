const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.FINNHUB_API_KEY;
const finnhubClient = new finnhub.DefaultApi();

function getStockSymbols(client) {
  finnhubClient.symbolSearch('', (error, data, response) => {
    data.result.map(symbolObj => {
      const symbol = symbolObj.symbol;
      console.log(client);
      client.querySync(`INSERT INTO stocks (stock_symbol)VALUES ('${symbol}')`);
    })
  });
}

module.exports = {
  getStockSymbols
}