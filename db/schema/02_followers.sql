DROP TABLE IF EXISTS followers CASCADE;

CREATE TABLE followers (
  PRIMARY KEY (user_id, follower_id),
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  follower_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);


