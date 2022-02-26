const router = require('express').Router();
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const secret = "secretString12345"

const register = (db) => {

  router.post("/", (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const bracket = req.body.bracket;
    
    db.query(`INSERT INTO users (username, password, email, money_bracket) VALUES ($1, $2, $3, $4)`, [username, bcrypt.hashSync(password, 10), email, bracket])
    .then((result) => {
      console.log("register", result)
      const token = jwt.sign({userID: result.insertedId}, secret);
      const loginData = {
        userID: result.insertedId,
        username,
        token
      }
  
      res.send(loginData);
    })
    .catch((err) => {
      console.log(err);
    });
  })

  return router;
}

module.exports = register;