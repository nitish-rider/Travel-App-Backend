const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  placesToVisit: {
    type: Object,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  addedBy: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
