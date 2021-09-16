const express = require('express');
const webpack = require('webpack');
const app = express();
require('dotenv').config();

const enableHMR = (process.env.ENABLE_HMR || 'true') === 'true';
if (enableHMR && process.env.NODE_ENV !== 'production') {
  console.log(enableHMR);
  console.log('Adding dev middleware, enabling HMR ');

  const webpack = require('webpack');
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');

  const config = require('./webpack.config');
  config.entry.app.push('webpack-hot-middleware/client');
  config.plugins = config.plugins || [];
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  console.log(config);

  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

const port = process.env.UI_SERVER_PORT || 3000;

app.use(express.static('public'));

app.listen(port, function () {
  console.log(`App started on port ${port}`);
});
