const db = require('../db/config')

const Shelters = {}

Shelters.findAll = () =>
  db.query('SELECT * FROM shelters ORDER BY id ASC');

  Shelters.findById = id => {
    return db.one(
      'SELECT * FROM shelters WHERE id = $1', [id]);
  };

  Shelters.create = (shelters, userId) =>{
  return db.one(
    `INSERT INTO shelters
    (name, zipcode, description, pets, user_id)
    VALUES($1, $2, $3, $4, $5)
    RETURNING *`, [shelters.name, shelters.zipcode, shelters.description, shelters.pets, userId])
}


Shelters.update = (shelters, sheltersId) =>{
    return db.one(
      `UPDATE shelters SET
      name = $1,
      zipcode = $2,
      description = $3,
      pets = $4
      WHERE id = $5
      RETURNING *`, [shelters.name, shelters.zipcode, shelters.description, shelters.pets, sheltersId])
}

Shelters.destroy = id => {
  return db.none(
    `DELETE FROM shelters
    WHERE id = $1`, [id]);
};
module.exports = Shelters
