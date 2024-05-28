const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const Place = require('../models/place.model');

const getPlaces = async () => {
  const places = await Place.find();
  return places;
};

const createPlace = async (placeData) => {
  const place = await Place.create(placeData);
  return place;
};

const deletePlace = async (id) => {
  const place = await Place.findById(id);
  if (!place) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Place not found');
  }
  await place.remove();
};

module.exports = {
  getPlaces,
  createPlace,
  deletePlace,
};
