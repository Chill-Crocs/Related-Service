const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

/// ///Schema//////
const RelatedSchema = new mongoose.Schema({
  info: {
    tags: [String],
    price: Number,
    imageUrl: String,
    description: String,
    details: [String],
    availability: Boolean,
  },
  seller: String,
  shippingStatus: String,
  favorite: Boolean,
});

const RelatedItem = mongoose.model('RelatedItem', RelatedSchema);

module.exports = RelatedItem;
