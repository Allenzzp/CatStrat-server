const router = require('express').Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const secret = "secretString12345"

const login = (db) => {

  router.post("/", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    console.log("here1")
  
    return db
      .query(`SELECT * FROM users WHERE username = $1`, [username])
      .then((result) => {
        console.log("here2")
        if (result.rows.length > 0) {
          bcrypt.compare(password, result.rows[0].password, (error, response) => {
            if (response) {
              const token = jwt.sign({userID: result.rows[0].id}, secret);
              const loginData = {
                userID: result.rows[0].id,
                username,
                token
              }
              res.send(loginData);
            } else {
              res.send({message: "Wrong username/password"});
            }
          })
        } else {
          res.send({message: "User doesn't exist"});
        } 
      })
      .catch(err => console.log(err));
  })
  
  return router;

}

module.exports = login;