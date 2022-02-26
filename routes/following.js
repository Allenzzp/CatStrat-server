const router = require("express").Router();

const following = (db) => {

  router.post("/", (req, res) => {
    const userID = req.body.userID
    const followID = req.body.id
  
    db.query(`INSERT INTO followers (follower_id, user_id) VALUES ($1, $2)`, [userID, followID])
      .then((result) => {
        res.send({added: true})
      })
      .catch(err => console.log(err))
  })

  return router;
}

module.exports = following;