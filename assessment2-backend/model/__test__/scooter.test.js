const Scooter = require('../scooter');

test('a Scooter converts itself to proper JSON format', () => {
  let scoot = new Scooter(1, 2, 1.2, 3.4, 10, 8, '2001-03-23', 'Munamankeli');
  let json =
    '{"id":1,"model":{"id":2,"name":"Munamankeli"},"position":{"lat":1.2,"lon":3.4},"electricity":{"max":10,"current":8},"added":"2001-03-23"}';
  expect(JSON.stringify(scoot)).toEqual(json);
  scoot = new Scooter(1, 2, 1.2, 3.4, 10, null, '2001-03-23');
  json =
    '{"id":1,"model":{"id":2},"position":{"lat":1.2,"lon":3.4},"electricity":{"max":10,"current":null},"added":"2001-03-23"}';
  expect(JSON.stringify(scoot)).toEqual(json);
  scoot = new Scooter(1, 2, 1.2, 3.4, 10, 8, '2001-03-23', 'Glion');
  json =
    '{"id":1,"model":{"id":2,"name":"Glion"},"position":{"lat":1.2,"lon":3.4},"electricity":{"max":10,"current":8},"added":"2001-03-23"}';
  expect(JSON.stringify(scoot)).toEqual(json);
});
