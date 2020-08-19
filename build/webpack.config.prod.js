const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.config.base');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
    devtool: 'source-map',
    mode: 'production',
    entry: {
        app: [path.resolve(__dirname, '../src/index.js')],
    },
    optimization: {
        minimize: true,
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
