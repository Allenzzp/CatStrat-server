// const router = require("express").Router();

// const purchase = (db) => {
  
//   router.post("/10", (req, res) => {
//     const userID = req.body.userID;
  
//     db.query(`update users set coins = (select coins from users where id = $1)+10 where id = $1`, [userID])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })
  
//   router.post("/50", (req, res) => {
//     const userID = req.body.userID;
  
//     db.query(`update users set coins = (select coins from users where id = $1)+50 where id = $1`, [userID])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })
  
//   router.post("/100", (req, res) => {
//     const userID = req.body.userID;
  
//     db.query(`update users set coins = (select coins from users where id = $1)+100 where id = $1`, [userID])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })
  
//   router.post("/250", (req, res) => {
//     const userID = req.body.userID;
  
//     db.query(`update users set coins = (select coins from users where id = $1)+250 where id = $1`, [userID])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })
  
//   router.post("/1000", (req, res) => {
//     const userID = req.body.userID;
  
//     db.query(`update users set coins = (select coins from users where id = $1)+1000 where id = $1`, [userID])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })
  
//   router.post("/66", (req, res) => {
//     const userID = req.body.userID;
  
//     const x = Math.floor((Math.random() * 200) + 1)
  
//     db.query(`update users set coins = (select coins from users where id = $1)+$2 where id = $1`, [userID, x])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })

//   router.post("/graph", (req, res) => {
//     const userID = req.body.userID;
  
//     db.query(`update users set coins = (select coins from users where id = $1)-5 where id = $1`, [userID])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })

//   router.post("/strat", (req, res) => {
//     const userID = req.body.userID;
  
//     db.query(`update users set coins = (select coins from users where id = $1)-15 where id = $1`, [userID])
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch(err => console.log(err))
//   })

//   return router;
// }

// module.exports = purchase;