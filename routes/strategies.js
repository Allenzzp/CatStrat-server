const router = require("express").Router();

const strategies = (db) => {
  router.get("/", (req, res) => {
    const userID = req.query.id

    return db
    .query(`select strategies.*, user_id from strategies JOIN users_strategies ON strategies.id = strategy_id WHERE strategies.custom = true AND users_strategies.user_id = $1`, [userID])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
    });
  })

  return router;
}

module.exports = strategies;
