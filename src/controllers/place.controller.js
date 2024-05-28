const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { PlaceService, OpenAPIService } = require('../services');

const getPlaces = catchAsync(async (req, res) => {
  const places = await PlaceService.getPlaces();
  res.status(httpStatus.OK).send(places);
});

const suggestPlaces = catchAsync(async (req, res) => {
  const { city } = req.body;
  const suggestedPlaces = await OpenAPIService.getSuggestedPlaces(city);

  // Assuming that the OpenAPIService returns an array of places
  // with each place having a name, description, city, and address
  // eslint-disable-next-line no-restricted-syntax

  const placeData = {
    placesToVisit: suggestedPlaces,
    city,
    addedBy: req.user.id,
  };

  const response = await PlaceService.createPlace(placeData);

  res.status(httpStatus.CREATED).send(response);
});

const deletePlace = catchAsync(async (req, res) => {
  const { id } = req.params;
  await PlaceService.deletePlace(id);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  getPlaces,
  suggestPlaces,
  deletePlace,
};
