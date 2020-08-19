const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

module.exports = merge(base, {
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info',
        }),
    ],
});
