const Pool = require('pg').Pool;
const debug = require('debug')('assessment2:pgdao');
const Scooter = require('./scooter');

// TODO: tämä vaatii .env tiedoston (projektin juureen)
require('dotenv').config();
// Käyttäjätunnus ja salasana .envistä
const USER = process.env.PGUSER;
const PASSWORD = process.env.PGPASSWORD;

/* Toteuta seuraavat kaksi funktiota
   Lisää tarvittavat parametrit funktioille
*/
// <toteuta>
async function getAllScooters() {
  const data = await pool.query(
    'SELECT scooters.id, scooters.lat, scooters.lon, scooters.max_electricity, scooters.current_electricity, scooters.added, models.name, models.id AS model_id  FROM scooters JOIN models ON scooters.model = models.id '
  );
  // console.log(data.rows);

  let scooters = [];

  for (let row of data.rows) {
    let scooterOlio = new Scooter(
      row.id,
      row.model_id,
      row.lat,
      row.lon,
      row.max_electricity,
      row.current_electricity,
      row.added,
      row.name
    );
    scooters.push(scooterOlio);
  }

  return scooters;
}

async function getSingleScooter(id) {
  const data = await pool.query(
    'SELECT scooters.id, scooters.lat, scooters.lon, scooters.max_electricity, scooters.current_electricity, scooters.added, models.name, models.id AS model_id  FROM scooters JOIN models ON scooters.model = models.id WHERE scooters.id=$1',
    [id]
  );
  let scooters = [];
  for (let row of data.rows) {
    let yksi = new Scooter(
      row.id,
      row.model_id,
      row.lat,
      row.lon,
      row.max_electricity,
      row.current_electricity,
      row.added,
      row.name
    );

    scooters.push(yksi);
  }
  return scooters[0];
}

// </toteuta>

// Alla olevaan koodiin ei pitäisi tarvita koskea

const conopts = {
  user: USER,
  password: PASSWORD,
  host: 'localhost',
  database: 'scooters',
  port: 5432
};

const pool = new Pool(conopts);

process.on('exit', () => {
  debug('\n\n*** Ending pool when exiting');
  pool.end();
});

function getAllModels() {
  return pool
    .query('SELECT * FROM models')
    .then(res => res.rows)
    .catch(err =>
      setImmediate(() => {
        throw err;
      })
    );
}

module.exports = { getAllModels, getAllScooters, getSingleScooter };
