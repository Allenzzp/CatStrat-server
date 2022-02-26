DROP TABLE IF EXISTS users_strategies CASCADE;

CREATE TABLE users_strategies (
  PRIMARY KEY (user_id, strategy_id),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  strategy_id INTEGER REFERENCES strategies(id) ON DELETE CASCADE
);
