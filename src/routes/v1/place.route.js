const express = require('express');
const placeController = require('../../controllers/place.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.route('/places').get(auth('getPlaces'), placeController.getPlaces);

router.route('/places/suggest').post(auth('suggestPlaces'), placeController.suggestPlaces);

router.route('/places/:id').delete(auth('deletePlace'), placeController.deletePlace);

module.exports = router;
