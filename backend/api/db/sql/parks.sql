
DROP TABLE IF EXISTS park;

CREATE TABLE park(
    id INTEGER PRIMARY KEY AUTOINCREMENT, /* Our data*/
    name TEXT NOT NULL, /* NPS data*/
    hyperlink TEXT NOT NULL, /* NPS data*/
    reviewCount INTEGER NOT NULL, /* Our data*/
    stars INTEGER NOT NULL /* Our data*/
);