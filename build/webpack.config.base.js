const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProd = process.env.NODE_ENV == 'production';

// 根据环境使用不同loader <link> <-> <style>
const generateLinkOrStyleLoader = () => {
    if (isProd) {
        return {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: !isProd,   // hmr热更新
            }
        };
    } 
    return 'style-loader'; // creates style nodes from JS strings
};

module.exports = {
    output: {
        filename: 'js/[name]_[hash:8].js', // contenthash 针对文件内容级别的修改，只有文件模块内容改变，hash值才会改变，合理加快打包和缓存
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@util': path.resolve(__dirname, '../src/utils'),
        },
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
                    generateLinkOrStyleLoader(),                            // style-loader creates style nodes from JS strings
                    {
                        loader: 'css-loader',                               // translates CSS into CommonJS
                        options: {
                            modules: {
                                mode: 'local',                              // enable css module 模块化
                                localIdentName: '[local]_[hash:base64:8]',  // 模块化名称
                            },        
                        }
                    },       
                    'postcss-loader',                                       // process CSS with PostCSS addprefix
                    'less-loader',                                          // compiles Less to CSS
                ],
                exclude: [path.resolve(__dirname, '../node_modules')]
            },
            {
                test: /\.(jpe?g|png|gif|ico|woff|woff2|eot|ttf|svg|swf|otf)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 5000,  // 5kb内编译成为base64，大于5kb使用file-loader，打包出文件
                            name: 'static/[name]_[contentHash:8].[ext]'
                        }
                    }
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, '../dist/index.html'), // 打包生成的文件名
            template: path.resolve(__dirname, '../src/template/index.html'), // 打包的html模板
            inject: true, // body的底部注入js
            minify: process.env.NODE_ENV == 'production', // 最紧凑的输出
        }),

        new MiniCssExtractPlugin({
            filename: 'css/[name]_[contentHash:8].css',
        }),
    ],
};
