const router = require("express").Router();

const history = (db) => {

  router.get("/", (req, res) => {
    const userID = req.query.userID
  
    db.query(`
      SELECT transactions.*, username, strategy_name  
      FROM transactions LEFT JOIN users 
      ON target_user = users.id
      LEFT JOIN strategies
      ON target_strategy = strategies.id
      WHERE user_id = $1 ORDER BY id desc
      LIMIT 10;
    `, [userID])
      .then((result) => {
        res.send(result.rows);
      })
      .catch(err => console.log(err.message));
  })

  return router;
}

module.exports = history;