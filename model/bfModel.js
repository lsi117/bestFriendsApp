const db = require('../db/config')

const Shelters = {}

Shelters.findAll = () =>
  db.query('SELECT * FROM shelters');

  Shelters.findById = id => {
    return db.one(
      'SELECT * FROM shelters WHERE id = $1', [id]);
  };

  Shelters.create = shelters =>{
  return db.one(
    `INSERT INTO shelters
    (shelterName, zipcode, description, pets)
    VALUES($1, $2, $3, $4)
    RETURNING *`, [shelters.shelterName, shelters.zipcode, shelters.description, shelters.pets])
}


Shelters.update = (shelters, id) =>{
    return db.one(
      `UPDATE shelters SET
      shelterName = $1,
      zipcode = $2,
      description = $3,
      pets = $4
      WHERE id = $5
      RETURNING *`, [shelters.shelterName, shelters.zipcode, shelters.description, shelters.pets, id])
}

Shelters.destroy = id => {
  return db.none(
    `DELETE FROM shelters
    WHERE id = $1`, [id]);
};
module.exports = Shelters
