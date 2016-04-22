var path = require("path");
var webpack = require('webpack');

module.exports = {
    entry: './demo/index',
    output: {
        path: path.resolve(__dirname, "demo"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['airbnb']
                }
            }
        ]
    }
};
