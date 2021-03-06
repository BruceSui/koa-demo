const path = require('path');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './main.js'
    },
    // plugins: [
    //     new CleanWebpackPlugin(['dist']),
    //     new HtmlWebpackPlugin({
    //         title: 'Production'
    //     })
    // ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ["babel-loader?cacheDirectory"],
            }
        ]
    }
};