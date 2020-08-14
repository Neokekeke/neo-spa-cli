// nodejs 环境
let config = {};

console.log('NODE_ENV:', process.env.NODE_ENV)
switch (process.env.NODE_ENV) {
    case 'development':
        config = require('./webpack.config.dev');
        break;
    case 'test':
        config = require('./webpack.config.test');
        break;
    case 'production':
        config = require('./webpack.config.prod');
        break;
    default:
        break;
}

module.exports = config;