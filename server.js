const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();
const config = require('./build/webpack.config');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
    })
);

// use hot middleware
app.use(webpackHotMiddleware(compiler));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '..dist/index.html');
});

// Serve the files on port 3066.
app.listen(3066, function () {
    console.log('Example app listening on port 3066!\n');
});
