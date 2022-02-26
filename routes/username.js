const router = require("express").Router();

const username = (db) => {
  router.get("/", (req, res) => {

    db
    .query(`SELECT id, username, avatar_url, coins FROM users`)
    .then((result) => {
      // console.log("res post", result.rows)
      res.send(result.rows)
    })
    .catch((err) => {
      console.log(err);
    });
  })

  router.get("/:id", (req, res) => {
    const userID = req.query.id;
  
    return db.query(`select * from users where id = $1`, [userID])
    .then((data) => {
      console.log("Success!")
      res.send(data.rows);
    })
  })

  return router;
}

module.exports = username;