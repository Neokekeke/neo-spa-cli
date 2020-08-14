const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../src/index.js'), path.resolve(__dirname, '../src/template/index.html')], // 热更新index.js、index.html
        // vendor: [] 
    },
    output: {
        filename: 'js/[name].[contenthash:8].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@util': path.resolve(__dirname, '../src/utils')
        }
    },
    module: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'),
            template: path.resolve(__dirname, '../src/template/index.html'),
            inject: true,
            minify: process.env.NODE_ENV == 'production',
        })
    ]
};