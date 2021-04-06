// const fs = require('fs');
// const path = require('path');
// const http = require('http');

// const utils = path.resolve(__dirname, './utils.js');
// fs.readFile(utils, (err, data) => {
//     console.log(__dirname, utils, data);
// });

// module.exports = {
//     c: 213
// };

// exports.a = 1;
// exports.b = 2;

// http.createServer((req, res) => {
//     console.log(req.url);
//     fs.readFile(`./${req.url}`, (err, data) => {
//         if (err){
//             res.writeHead('404');
//             res.end('not found');
//             console.log(err);
//         } else {
//             res.end('666');
//             console.log(data);
//         }
//     });

// }).listen(8888);