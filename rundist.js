const express = require('express');
const path = require('path');
const http = require('http');
const open = require('open');
const port = 80;
const app = express();
 
// 通常用于加载静态资源
app.use(express.static(path.resolve(__dirname, './dist')));
 
// 在你应用 JavaScript 文件中包含了一个 script 标签
// 的 index.html 中处理任何一个 route
app.get('*', function (request, response){
    var html = path.resolve(__dirname, './dist/index.html');
    response.sendFile(html);
});

const httpServer = http.createServer(app);
 
// Serve the files on port 3066.
httpServer.listen(port, function(){
    console.log(`Prod Example app listening on port ${port} !\n`);
    open(`http://localhost:${port}`);
});