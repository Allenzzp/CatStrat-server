const router = require("express").Router();

const dislike = (db) => {

  router.post("/", (req, res) => {
    const id = req.body.id
  
    db.query(`update users set dislikes = (select dislikes from users where id = $1)+ 1 where id = $1`, [id])
      .then((result) => {
        res.send(result.rows)
      })
      .catch(err => console.log(err))
  })

  return router;
}

module.exports = dislike;