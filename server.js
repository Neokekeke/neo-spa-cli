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
        publicPath: config.output.publicPath
    })
);

// use hot middleware
app.use(webpackHotMiddleware(compiler));

app.get('/*', function(req, res){
    // 访问spa其他路由时，本地的express访问的还是打包的html页面，分为两个模板打包
    // 开发环境可以和生产环境区分开
    var html = path.resolve(__dirname, './src/index.html');
    res.sendFile(html);
});

const httpServer = http.createServer(app);
const port = 3066;

var pathName = path.resolve(__dirname);
fs.readdir(pathName, function(err, files){
    var dirs = [];
    (function iterator(i){
      if(i == files.length){
        console.log('------------ files lists ------------', '\n' , files, '\n');
        return ;
      }
      fs.stat(path.join(pathName, files[i]), function(err, data){     
        if(data.isFile()){               
            dirs.push(files[i]);
        }
        iterator(i+1);
       });   
    })(0);
});

// Serve the files on port 3066.
httpServer.listen(port, function(){
    console.log(`Example app listening on port ${port} !\n`);
});
