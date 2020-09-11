const path = require('path');
const base = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    devtool: 'source-map',
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, '../src/container/index.js'),
    },
    output: {
        filename: 'js/[name]_[contentHash:8].js', // contentHash 针对文件内容级别的修改，只有文件模块内容改变，hash值才会改变，合理加快打包和缓存
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'runtime' // 把runtime部分的代码抽离出来，单独打包能起到浏览器缓存作用
        },
        splitChunks: {  // 抽取相同的vendor部分
            cacheGroups: {
                commons: {
                    name: 'vendor',
                    test: /node_modules/,
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                sourceMap: true,    // 开启sourceMap
                parallel: false,
                terserOptions: {
                    ecma: 8,
                    output: {
                        comments: false, // 保留注释
                        beautify: false, // 不需要格式化
                    },
                    compress: {
                        drop_console: true, // 去除console
                        collapse_vars: true, // 内嵌定义了但是只有用到一次的变量
                        reduce_vars: true, // 提取出出现多次但是没有定义成变量去引用的静态值
                    },
                },
            }),
        ],
    },
});
