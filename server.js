// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const jwt = require('jsonwebtoken')
const morgan = require('morgan');
const secret = "secretString12345"

// Environment variables
const { ENVIRONMENT, DEV_URL } = process.env;

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect((err) => {
  console.log('Connected to db');
  if (err) {
  return console.log('Error with db connection:', err)
  }
});

// Middleware
app.use(cors({
  origin: [DEV_URL],
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true
}));
app.use(morgan(ENVIRONMENT));

// allows api to parse json // both .json works but you need to use one
app.use(express.json());
// app.use(bodyParser.json())

// allow api to receive data from client app // can use either

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get('/', (req, res) => {
//   res.json({ greetings: 'hello' });
// })

// Require routes
const dashboardRoutes = require('./routes/dashboard');
const calendarRoutes = require("./routes/calendar");
const stockRoutes = require("./routes/stock");
const strategyRoutes = require("./routes/strategy");
const leaderBoardRoutes = require("./routes/leaderBoard");
const { renderSync } = require("sass");
const loginRoutes = require("./routes/login");
const registerRoutes = require("./routes/register");
const strategiesRoutes = require("./routes/strategies");
const profileRoutes = require("./routes/profile");
const usernameRoutes = require("./routes/username");
const followingRoutes = require("./routes/following");
const unfollowRoutes = require("./routes/unfollow");
const likeRoutes = require("./routes/like");
const dislikeRoutes = require("./routes/dislike");
const historyRoutes = require("./routes/history");
const { endOfDay } = require("date-fns");

// Routes
app.use('/dashboard', dashboardRoutes(db));
app.use("/calendar", calendarRoutes(db));
app.use("/stock", stockRoutes(db));
app.use("/strategy", strategyRoutes(db));
app.use("/leaderBoard", leaderBoardRoutes(db));
app.use("/login", loginRoutes(db))
app.use("/register", registerRoutes(db))
app.use("/strategies", strategiesRoutes(db))
app.use("/profile", profileRoutes(db))
app.use("/username", usernameRoutes(db))
app.use("/following", followingRoutes(db))
app.use("/unfollow", unfollowRoutes(db))
app.use("/like", likeRoutes(db))
app.use("/dislike", dislikeRoutes(db))
app.use("/history", historyRoutes(db))





// Handle Upvote a strategy
app.post("/strategy/:id", (req, res) => {
  const strategy_id = req.params.id;
  const userID = req.body.userID;
  const targetUserID = req.body.id;

  db.query(`update strategies set upvotes = (select upvotes from strategies where id = $1) + 1 where id = $1`, [strategy_id])
    .then((result) => {
      res.send(result.rows);
      db.query(`
          INSERT INTO transactions (user_id, target_user, target_strategy, description, amount) VALUES
          ($1, $2, $3, $4, 1)
        `, [userID, targetUserID, strategy_id, `Upvote other''s strat_place_holder strategy`]);
    })
    .catch(err => console.log(err))
})

app.post("/upvotecoins", (req, res) => {
  const userID = req.body.userID;
  const targetUserID = req.body.id;

  db.query(`update users set coins = (select coins from users where id = $1) - 1 where id = $1`, [userID])
    .then((result) => {
      res.send(result.rows);
    }).catch(err => console.log(err));
  
  db.query(`UPDATE users SET coins = (SELECT coins FROM users WHERE id = $1) + 1 WHERE id = $1`, [targetUserID]);
})

app.post("/purchase/catecoins/:amount", (req, res) => {
  const userID = req.body.userID;
  let amount = req.params.amount;
  let randomCoins = 0;

  if (amount === "random") {
    randomCoins = Math.floor((Math.random() * 200) + 1);
  } else {
    amount = parseInt(amount);
  }
  console.log("did it pass here?")

  db.query(`update users set coins = (select coins from users where id = $1) + $2 where id = $1`, [userID, randomCoins? randomCoins : amount])
    .then((result) => {
      res.send(result.rows);
      console.log("here working?")
      db.query(`
        INSERT INTO transactions 
        (user_id, is_spending, amount, description) VALUES ($1, $2, $3, $4)`, [userID, false, randomCoins? randomCoins : amount, "Purchased coins"]);
    })
    .catch(err => console.log(err))
})


app.post("/purchase/graph", (req, res) => {
  const userID = req.body.userID;
  const targetUserID = req.body.id;

  db.query(`update users set coins = (select coins from users where id = $1) - 5 where id = $1`, [userID])
    .then((result) => {
      res.send(result.rows);

      db.query(`
        INSERT INTO transactions (user_id, target_user, description, amount, unlock_chart) VALUES
        ($1, $2, $3, 5, true)
      `, [userID, targetUserID, `Unlock other's graph Info`]);

      db.query(`update users set coins = (select coins from users where id = $1) + 5 where id = $1`, [targetUserID]);
    })
    .catch(err => console.log(err))
});

//handle strategies purchase - DONE
app.post("/purchase/strategies", (req, res) => {
  const userID = req.body.userID;
  const targetUserID = req.body.id;

  db.query(`update users set coins = (select coins from users where id = $1) - 15 where id = $1`, [userID])
    .then((result) => {
      res.send(result.rows);
      db.query(`
        INSERT INTO transactions (user_id, target_user, description, amount, unlock_strategies) VALUES
        ($1, $2, $3, 15, true)
      `, [userID, targetUserID, `Unlock other's strategies info`]);

      db.query(`update users set coins = (select coins from users where id = $1) + 15 where id = $1`, [targetUserID]);
    })
    .catch(err => console.log(err))
});

app.post("/strategy/delete/:id", (req, res) => {
  const strategy_id = req.params.id
  console.log("strat", strategy_id)
  
  db.query(`update strategies set downvotes = (select downvotes from strategies where id = $1) + 1 where id = $1`, [strategy_id])
  .then((result) => {
    console.log("success!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.get("/sellers", (req, res) => {
  const userID = req.query.userID;
  const id = req.query.id;

  db.query(`select * from sellers where user_id = $1 and buyer_id = $2`, [id, userID])
  .then((result) => {
    console.log("success purchase!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.get("/stratsellers", (req, res) => {
  const userID = req.query.userID;
  const id = req.query.id;

  db.query(`select * from strat_sellers where user_id = $1 and buyer_id = $2`, [id, userID])
  .then((result) => {
    console.log("success purchase!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.get("/dislikers", (req, res) => {
  const userID = req.query.userID;
  const id = req.query.id;

  db.query(`select * from dislikers where user_id = $1 and disliker_id = $2`, [id, userID])
  .then((result) => {
    console.log("success dislike!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.post("/buydislike", (req, res) => {
  const userID = req.body.userID
  const id = req.body.id;

  db.query(`insert into dislikers (user_id, disliker_id) values ($1, $2)`, [id, userID])
  .then((result) => {
    console.log("DB dislike!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.get("/likers", (req, res) => {
  const userID = req.query.userID;
  const id = req.query.id;

  db.query(`select * from likers where user_id = $1 and liker_id = $2`, [id, userID])
  .then((result) => {
    console.log("success like!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.post("/buylike", (req, res) => {
  const userID = req.body.userID
  const id = req.body.id;

  db.query(`insert into likers (user_id, liker_id) values ($1, $2)`, [id, userID])
  .then((result) => {
    console.log("DB like!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.post("/buygraph", (req, res) => {
  const userID = req.body.userID
  const id = req.body.id;

  db.query(`insert into sellers (user_id, buyer_id) values ($1, $2)`, [id, userID])
  .then((result) => {
    console.log("DB purchase!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

app.post("/buystrat", (req, res) => {
  const userID = req.body.userID
  const id = req.body.id;

  db.query(`insert into strat_sellers (user_id, buyer_id) values ($1, $2)`, [id, userID])
  .then((result) => {
    console.log("DB purchase!")
    res.send(result.rows)
  })
  .catch(err => console.log(err))
})

//give user coins when they (first) login daily

// app.post("/logincoins", (req, res) => {
//   const userID = req.body.userID

//   db
//   .query(`update users set coins = (select coins from users where id = $1)+10`, [userID])
//   .then((result) => {
//     console.log("login coin success!")
//     res.send(result.rows)
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// })

// How to authenticate JWT TOKEN - Don't DELETE //
// app.get('/api', function(req, res){
//   var token = req.query.token;
//   jwt.verify(token, secret, function(err, decoded){
//     if(!err){
//       db.query(`SELECT * from users where id = $1`, [decoded.userID])
//         .then((result) => res.json({...result.rows[0], userID: decoded.userID}))
//       // res.json(decoded);
//     } else {
//       res.send(err);
//     }
//   })
// })


// connect to PORT
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});