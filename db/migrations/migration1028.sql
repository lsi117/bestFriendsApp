/*table for users in db*/
\c bf
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT,
  email VARCHAR(255)
);

/*table for my app db*/
\c bf
CREATE TABLE IF NOT EXISTS shelters (
  id SERIAL PRIMARY KEY,
  shelterName VARCHAR(255),
  zipcode INTEGER,
  description TEXT,
  pets VARCHAR(255),
  user_id INTEGER REFERENCES users(id)
);
