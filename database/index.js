/* eslint-disable no-console */
const mongoose = require('mongoose');

/// ///Connection//////
const db = mongoose.connect('mongodb://localhost/Related', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => { console.log('Connected to Mongo'); })
  .catch((err) => { console.log(err); });

module.exports = db;
