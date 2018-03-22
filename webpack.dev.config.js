const merge = require('webpack-merge')
const common = require('./webpack.common.config')

config = merge(common, {
    devServer: {
        compress: true,
        port: 8000,
        historyApiFallback: true,
        open: true,
        watchOptions: {
            ignored: /node_modules/
        }
    }
})

module.exports = config