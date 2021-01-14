/* eslint-disable no-console */
const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

/// ///Middleware//////
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
