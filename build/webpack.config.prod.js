const path = require('path');
const base = require('./webpack.config.base');
const {
    merge
} = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
// 添加PWA（progress web application）, service worker
const WorkboxPlugin = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(base, {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    entry: {
        app: path.resolve(__dirname, '../src/container/index.js'),
    },
    output: {
        filename: 'js/[name]_[contentHash:8].js', // contentHash 针对文件内容级别的修改，只有文件模块内容改变，hash值才会改变，合理加快打包和缓存
        chunkFilename: 'chunks/[name]_[contentHash:8].chunk.js', // 按需加载配置
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    /**
                     * MiniCssExtractPlugin.loader 和 style-loader 取决于当前环境，
                     * production 需要把css -> <link>标签插入到html中用 MiniCssExtractPlugin.loader
                     * development 需要把css -> <style>标签插入到html中用 style-loader
                     */
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: false, // hmr热更新
                        },
                    }, // style-loader creates style nodes from JS strings
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
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'runtime' // 把runtime部分的代码抽离出来，单独打包能起到浏览器缓存作用，路由懒加载
        },
        splitChunks: { // 抽取相同的vendor部分
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
                sourceMap: true, // 开启sourceMap
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
    plugins: [
        // service worker
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助 ServiceWorkers 快速启用
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true,
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name]_[contenthash:8].css',
        }),

        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'), // 打包生成的文件名
            template: path.resolve(__dirname, '../src/template/index.html'), // 打包的html模板
            inject: true, // body的底部注入js
            minify: process.env.NODE_ENV == 'production', // 最紧凑的输出
            chunksSortMode: 'none'
        }),
    ]
});
