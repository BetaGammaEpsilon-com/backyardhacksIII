DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS park;

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);


CREATE TABLE park(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    hyperlink TEXT NOT NULL,
    stars INTEGER NOT NULL
);