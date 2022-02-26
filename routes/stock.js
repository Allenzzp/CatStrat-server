const router = require("express").Router();

const stock = (db) => {

  router.get("/", (req, res) => {
    // const userID = req.query.userID;
    //get token
    //decode token with secret, if token expired?
      //get userID --> obj.userID 
    return db.query(`SELECT * FROM stocks;`)
    .then((data) => {
      res.send(data.rows);
    })
  });

  return router;
}

module.exports = stock;