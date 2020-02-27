# Assessment testin palvelin

## Tausta

Palvelimen tarkoitus toteuttaa yksinkertainen REST-palvelu, käyttäen tietokantaa apuna. Palvelun käyttäjä on skuutteja vuokraava yritys.

Palvelin tarjoaa rajapinnan skuuttien (scooter) käsittelyyn. Kuhunkin skuuttiin liittyy tietoa siitä mikä sen malli on, missä se juuri nyt sijaitsee, tietoa sen akusta, sekä koska se on lisätty skuuttiarmeijaan.

## Tehtävät

### Tietokanta

Tietokannan alustamiseen käytetään SQL-tiedostoja, jotka
voidaan ajaa `psql`-ohjelmalla `\i` komennolla. Tämä osuus vaatii siis puhtaan SQL-koodin kirjoittamista. Tähän osuuteen löytyy lisää ohjeita `sql`-hakemistosta. Lyhyesti:

- Luo taulu, johon voi tallettaa skoottereita
- Alusta taulu muutamalla skootterilla

### Tietokantakäsittely

Projektiin on jo lisätty PostgreSQL ajuri, sekä DAO-moduuli
tietokannan käsittelyyn. Tehtävänä on siis vain päivittää kyseinen moduuli, sekä tehdä apuluokka joka helpottaa tarvittavan JSON dokumentin luomista.

- `pg_dao.js` sisältää yhteydenoton kantaan, mutta siitä puuttuu *scooters* taulun käsittelyfunktioiden toteutus. Myös yhteyden muodostamiseen vaadittavat käyttöjätunnus ja salasana täytyy ottaa käyttöön `.env` tiedosto toteuttamalla. Katso esimerkiksi `sample.env`
- `scooter.js` tiedostoon on tarkoitus toteuttaa luoka Scooter, jonka tehtävä on lähinnä helpottaa tietokannasta saadun datan muotoilemista vaadittavaan JSON-muotoon. Luokka siis vaatii käytännössä vain konstruktorin, joka lisää sopivat jäsenet saamistaan parametreista
    
    - parametrit: taulun sarakkeet, eli `id`, `model`, `lat`, `lon`, `max_electricity`, `current_electricity`, `added`
    - ylimääräisenä parametrina esimerkiksi `modelname`, jos haluat hakea JOINilla myös skuutin mallin nimen

Kannasta `pg_dao` moduulin hakemat skuutit täytyy muuntaa Scooter-tyyppisiksi olioiksi ennen palauttamista. Näin palvelusta palautuu halutun muotoista JSONia.

### REST-toteutus

Toteuta tarvittava middleware skuuttien käsittelyyn. Tämä toteutus `routes/scooters.js` moduuliin. Toteuta sinne seuraavat reitit:

- `GET /api/scooters` - palauttaa kaikki skuutit
- `POST /api/scooters` - lisää uuden skuutin tietokantaan
- `GET /api/scooters/:id` - palauttaa skuutin, jonka id on polkuparametrissa

Tietokantaan **ei saa** ottaa suoraan yhteyttä tästä moduulista, vaan tietojen haku `pg_dao` moduulin avulla.

Huomaa, että jos sinulle tulee ongelmia JSON dokumentin kenttien kanssa - eli ne eivät ole Frontin haluamassa muodossa - niin todennäköisesti et ole käyttänyt Scooter-luokkaa, tai luokan toteutus ei ole kuten haluttu.