var express = require('express');
var router = express.Router();
const { getAllScooters, getSingleScooter } = require('../model/pg_dao');

router.route('/').get(async function(req, res) {
  try {
    let data = await getAllScooters();
    if (!data) {
      res.status(404);
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err.message);
    res.status(400);
  }
  // res.status(403).send('not implemented yet');
});

router.route('/:id').get(async (req, res) => {
  try {
    let data = await getSingleScooter(req.params.id);
    if (!data) {
      res.status(404).json({ error: 'Not found' });
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    console.error(err.message);
    res.status(400);
  }
});

module.exports = router;
