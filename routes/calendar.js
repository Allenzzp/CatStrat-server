const router = require("express").Router();

const calendar = (db) => {

  router.get("/:id", (req, res) => {
    const recordID = req.params.id;
    return db.query(`SELECT * FROM records WHERE id = $1`, [recordID])
      .then(data => {
        res.send(data.rows);
      })
      .catch(err => {
        console.log(err);
      })
  });

  router.get("/", (req, res) => {
    const userID = req.query.userID;
    //get token
    //decode token with secret, if token expired?
      //get userID --> obj.userID 
    return db.query(`SELECT * FROM records WHERE user_id = $1;`, [userID])
    .then((data) => {
      res.send(data.rows);
    })
  });

  router.post("/", (req, res) => {
    console.log(req.body);
    const { netBalance, investAmount, investChoice, strategyID, stockID, date, userID } = req.body;

    return db.query(`INSERT INTO records (
      profit, user_id, strategy_id, day, investment, stock_id, stock_option
    )VALUES (
      $1, $2, $3, $4, $5, $6, $7
    ) returning *`,[netBalance, userID, strategyID, date, investAmount, stockID, investChoice])
      .then(data => {
        res.send(data.rows);
      });
  });

  router.put("/:recordID", (req, res) => {
    const recordID = req.params.recordID;
    const { netBalance, investAmount, strategyID, stockID, date, investChoice, userID } = req.body;

    return db.query(`UPDATE records SET
      profit = $1, user_id = $2, strategy_id = $3, day = $4, investment = $5, stock_id = $6, stock_option = $7
      WHERE id = $8`, [netBalance, userID, strategyID, date, investAmount, stockID, investChoice, recordID])
      .then(data => {
        res.send(data.rows);
      });
  });

  router.delete("/:recordID", (req, res) => {
    const recordID = req.params.recordID;
    return db.query(`DELETE FROM records WHERE id = $1`, [recordID])
      .then(data => res.send("Delete 1 record successfully!"))
      .catch(err => console.log(err.message));
  });

  return router;
}

module.exports = calendar;