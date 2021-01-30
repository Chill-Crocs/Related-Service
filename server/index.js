/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const RelatedItems = require('../database/Item.js');

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(compression());
app.use(express.static('public'));

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

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
