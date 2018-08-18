require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  devtool: 'eval-source-map',
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, './build'),
    filename: 'app.min.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Logistics Fee Calculator',
      template: './src/index.html',
      inject: true
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8: true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true
      },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_KEY: JSON.stringify(process.env.API_KEY),
        SERVICE_ID: JSON.stringify(process.env.SERVICE_ID),
        MAPS_API_KEY: JSON.stringify(process.env.MAPS_API_KEY)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss']
  }
};

module.exports = config;
