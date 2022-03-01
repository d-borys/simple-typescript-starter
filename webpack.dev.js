const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');
const path = require("path");

module.exports = merge(config, {
    devtool: 'inline-source-map',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
});
