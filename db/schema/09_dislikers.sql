DROP TABLE IF EXISTS dislikers CASCADE;

CREATE TABLE dislikers (
  PRIMARY KEY (user_id, disliker_id),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  disliker_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);