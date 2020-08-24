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
    output: {
        filename: 'js/[name]_[hash:8].js', // contentHash 针对文件内容级别的修改，只有文件模块内容改变，hash值才会改变，合理加快打包和缓存
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
});
