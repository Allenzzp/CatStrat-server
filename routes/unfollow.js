const router = require("express").Router();


const unfollow = (db) => {
  router.post("/", (req, res) => {
    const userID = req.body.userID
    const followID = req.body.id
  
    db.query(`delete from followers where follower_id = $1 AND user_id = $2`, [userID, followID])
      .then((result) => {
        res.send({added: false})
      })
      .catch(err => console.log(err))
  })

  return router;
}

module.exports = unfollow;