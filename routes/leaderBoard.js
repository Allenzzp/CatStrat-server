const router = require("express").Router();

const leaderBoard = (db) => {

  router.get("/strategy", (req, res) => {
    // const userID = req.query.userID;
    //get token
    //decode token with secret, if token expired?
      //get userID --> obj.userID 
    return db.query(`
      SELECT strategies.*, users.username, users.avatar_url FROM users_strategies
      JOIN strategies ON strategies.id = strategy_id
      JOIN users ON user_id = users.id
      WHERE custom = true
      ORDER BY upvotes DESC
      LIMIT 10;`)
    .then((data) => {
      res.send(data.rows);
    })
  });

  
  router.get("/coin", (req, res) => {
    // const userID = req.query.userID;
    //get token
    //decode token with secret, if token expired?
      //get userID --> obj.userID 
    return db.query(`
      SELECT * FROM users ORDER BY coins DESC LIMIT 10;`)
    .then((data) => {
      res.send(data.rows);
    })
  });


  return router;
}

module.exports = leaderBoard;