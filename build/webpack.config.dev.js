const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.config.base');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            path.resolve(__dirname, '../src/index.js'),
        ],
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
