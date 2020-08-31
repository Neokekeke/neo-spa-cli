const fs = require('fs');
const path = require('path');
const http = require('http');
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

app.get('/*', function(req, res){
    var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    res.send(html);
});

const httpServer = http.createServer(app);

// Serve the files on port 3066.
httpServer.listen(3066, function(){
    console.log('Example app listening on port 3066!\n');
});
