// finnhubClient.symbolSearch('', async (error, data, response) => {
//   const symbolLists = []
//   await data.result.map(symbolObj => {
//     symbolLists.push(symbolObj.symbol);
//   });
//   function generateQuerySyntax(num) {
//     let res ="";
//     for (let i = 1; i < num; i++) {
//       res += `($${i}), ` //9
//     }
//     res += `($${num})`;
//     return res;
//   }
//   const subQuery = generateQuerySyntax(symbolLists.length);

//   const query = `INSERT INTO stocks (stock_symbol) VALUES ${subQuery};`;

//   db.query(query, [...symbolLists], (err, res) => {
//     console.log(err);
//     db.end();
//   });
// });