const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

require('dotenv').config({path: 'src/.env'});


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: '/',
        filename: 'main.js',
        path: path.resolve(__dirname, 'src/dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            additionalData: `@import "./src/scss/_variables.scss";`
                        },
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            'env.API_LOCAL_ENDPOINT': '"' + process.env.API_LOCAL_ENDPOINT + '"',
            'env.API_ENDPOINT': '"' + process.env.API_ENDPOINT + '"',
            'env.PUSHER_KEY': '"' + process.env.PUSHER_KEY + '"',
            'env.BROADCASTER': '"' + process.env.BROADCASTER + '"'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: process.env.API_ENDPOINT,
                changeOrigin: true,
            }
        },
    },
};