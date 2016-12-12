var path = require('path')
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const devBuild = process.env.NODE_ENV !== 'production';
const nodeEnv = devBuild ? 'development' : 'production';

const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;

var config = {
    entry: {
        bundle: './src/js/main.js',
    },
    resolve: {
        extensions: ['', '.js'],
    },
    output: {
        publicPath: './dist/',
        path: './dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(glsl|frag|vert)$/, loader: 'shader' },
            {test: /\.css$/i, loaders: ['style','css']},
            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ],
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: './src/img', to: './img' },
            { from: './src/music', to: './music' },
        ]),
    ]
};

if (devBuild) {
    console.log('Webpack dev build');
    config.devtool = 'eval-source-map';
} else {
    console.log('Webpack production build');
    config.plugins.push(
        new webpack.optimize.DedupePlugin()
    );
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    );
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    );
}

module.exports = config;


