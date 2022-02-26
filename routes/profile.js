const router = require("express").Router();

const profile = (db) => {

  router.get("/:id", (req, res) => {
    const userID = req.query.userID
    const id = req.query.id;
  
    return db.query(`SELECT users.*, (SELECT COUNT(follower_id) AS followers from followers WHERE user_id = $1), (SELECT COUNT(user_id) AS following from followers WHERE follower_id = $1), (select follower_id AS fid from followers where user_id = $1 and follower_id = $2), (SELECT sum(profit) AS profit from records WHERE user_id = $1) from users LEFT JOIN followers on users.id = followers.user_id LEFT JOIN records on users.id = records.user_id WHERE users.id = $1 GROUP BY users.id`, [id, userID])
    .then((data) => {
      console.log("YES")
      res.send(data.rows);
    })
  })

  return router;

}

module.exports = profile;
