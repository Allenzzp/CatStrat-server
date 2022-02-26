const router = require("express").Router();

const strategy = (db) => {

  router.get("/:userID", (req, res) => {
    const userID = req.params.userID;
    // const userID = req.query.userID;
    //get token
    //decode token with secret, if token expired?
    //get userID --> obj.userID 
    return db.query(`
      SELECT strategies.* FROM users_strategies
      JOIN strategies ON strategies.id = strategy_id
      JOIN users ON user_id = users.id
      WHERE user_id = $1;`, [userID])
      .then((data) => {
        res.send(data.rows);
      })
  });

  router.post("/", (req, res) => {
    const { userID, name, description } = req.body;

    const strategies_query = `INSERT INTO strategies (strategy_name, description) 
    VALUES ($1, $2) RETURNING *`;

    const users_strategies_query = `INSERT INTO users_strategies
    VALUES ($1, $2) RETURNING *`;

    return db.query(strategies_query, [name, description])
      .then(data => {
        // console.log('data', data)
        console.log('data.rows', data.rows);
        let strategy_id = data.rows[0].id
        db.query(users_strategies_query, [userID, strategy_id])
          .then(data => {
            console.log('data.rows2', data.rows)
            res.send(data.rows);
          })
      })
      .catch(err => {
        console.log('err', err)
      });
  });

  router.put("/", (req, res) => {
    const { id, name, description } = req.body;

    return db.query(`UPDATE strategies set
      strategy_name = $1, description = $2 WHERE id = $3 RETURNING *`, [name, description, id])
      .then(data => {
        console.log('data.rows', data.rows)
        res.send(data.rows);
      })
      .catch(err => {
        console.log('err', err)
      });
  });

  router.delete("/:id/:userID", (req, res) => {
    // const { id, userID } = req.body;
    // console.log('req', req);
    const id = req.params.id;
    const userID = req.params.userID;
    return db.query(`DELETE FROM users_strategies WHERE user_id = $1 AND strategy_id = $2`, [userID, id])
      .then(data => res.send("Delete 1 record successfully!"))
      .catch(err => console.log(err.message));
  });


  return router;
}

module.exports = strategy;