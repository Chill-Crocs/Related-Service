const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// eslint-disable-next-line no-unused-vars
const db = require('./index.js');

const RelatedSchema = new mongoose.Schema({
  _id: Number,
  relatedItems: [
    {
      _id: Number,
      name: String,
      price: Number,
      imageUrl: [String],
      description: String,
      details: [String],
      seller: String,
      shippingStatus: String,
      favorite: Boolean,
    },
  ],
  shopItems: [
    {
      _id: Number,
      name: String,
      price: Number,
      imageUrl: [String],
      description: String,
      details: [String],
      seller: String,
      shippingStatus: String,
      favorite: Boolean,
    },
  ],
});

const RelatedItem = mongoose.model('RelatedItem', RelatedSchema);

module.exports = RelatedItem;
