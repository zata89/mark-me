const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.config')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const config = merge(common, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});

module.exports = config