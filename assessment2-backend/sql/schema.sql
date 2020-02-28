CREATE TABLE IF NOT EXISTS models (
    id SERIAL PRIMARY KEY,
    name varchar(127) NOT NULL UNIQUE
);
CREATE TABLE IF NOT EXISTS scooters (
    id SERIAL PRIMARY KEY,
    model INT REFERENCES models(id) NOT NULL,
    lat FLOAT,
    lon FLOAT,
    max_electricity INT NOT NULL,
    current_electricity INT,
    added DATE DEFAULT CURRENT_DATE NOT NULL
);

-- TODO: luo scooters-taulu
/*
Sarakkeet: id, model, lat, lon, max_electricity, current_electricity, added

model viittaa models-tauluun, lisää siis foreign key constraint

added kentälle oletusarvo tämä päivä

pakolliset kentät: model, max_electricity, added
*/
