const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: {
        app: [
            'webpack-hot-middleware/client',
            path.resolve(__dirname, '../src/container/index.js'),
        ],
    },
    output: {
        filename: '[name].js', // contentHash 针对文件内容级别的修改，只有文件模块内容改变，hash值才会改变，合理加快打包和缓存
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    /**
                     * 根据环境使用不同loader <link> <-> <style>
                     * MiniCssExtractPlugin.loader 和 style-loader 取决于当前环境，
                     * production 需要把css -> <link>标签插入到html中用 MiniCssExtractPlugin.loader
                     * development 需要把css -> <style>标签插入到html中用 style-loader
                     */
                    'style-loader',
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            modules: {
                                mode: 'local', // enable css module 模块化
                                localIdentName: '[local]_[hash:base64:8]', // 模块化名称
                            },
                        },
                    },
                    'postcss-loader', // process CSS with PostCSS addprefix
                    'less-loader', // compiles Less to CSS
                ],
                exclude: path.resolve(__dirname, '../node_modules'),
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html', // express 本地打包生成的文件名及路径
            template: path.resolve(__dirname, '../src/index.html'), // 打包的html模板
            inject: true, // body的底部注入js
            minify: false
        }),
    ],
});
