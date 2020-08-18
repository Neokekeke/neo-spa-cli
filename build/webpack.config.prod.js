const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.config.base');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
    mode: 'production',
    entry: {
        app: [path.resolve(__dirname, '../src/index.js')],
    },
});
