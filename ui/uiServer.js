const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.UI_SERVER_PORT || 3000;

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`App started on port ${port}`);
});
