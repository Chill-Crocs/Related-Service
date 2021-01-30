/* eslint-disable no-console */
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://database/Related', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected to Mongo'); })
  .catch((err) => { console.log(err); });

module.exports = db;
