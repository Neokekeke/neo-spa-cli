const webpack = require("webpack");
const base = require("./webpack.config.base");
const { merge } = require("webpack-merge");

module.exports = merge(base, {
    mode: 'development'
});
