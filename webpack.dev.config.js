var path = require("path");
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './demo/index'
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/static/",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
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
