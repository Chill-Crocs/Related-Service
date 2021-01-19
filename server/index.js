/* eslint-disable no-console */
const express = require('express');
const { reset } = require('nodemon');
const RelatedItem = require('../database/Item.js');
const RelatedItems = require('../database/Item.js');

const app = express();
const PORT = 3001 || process.env.PORT;

/// ///Middleware//////
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/// ///Routes//////
app.get('/api/relatedItems/:id', (req, res) => {
  const { id } = req.params;
  RelatedItems.findById(id)
    .then((response) => {
      console.log(`Item ${id} successfully retrieved`);
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.patch('/api/relatedItems/:parentId/:favoriteId', (req, res) => {
  const { parentId, favoriteId } = req.params;
  const numFavoriteId = Number(favoriteId);
  RelatedItems.findOneAndUpdate({ _id: parentId, "relatedItems._id": numFavoriteId }, { $set: { "relatedItems.$.favorite": true } })
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
