-- This creates the "items" table in the database.
-- Each item gets an id number (made automatically) and a title.

CREATE TABLE items (
  id    SERIAL PRIMARY KEY,
  title TEXT NOT NULL
);

ALTER TABLE items 
  ADD COLUMN category TEXT NOT NULL DEFAULT 'Game Basics';

