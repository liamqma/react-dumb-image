var path = require("path");

module.exports = {
    entry: {
        app: ['./src/index']
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['airbnb']
                }
            }
        ]
    }
};
