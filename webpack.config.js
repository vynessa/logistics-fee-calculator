require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.min.js'
  },
  devServer: {
    publicPath: '/',
    contentBase: './src',
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['react']
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
      title: 'LogisticsFeeCalculator',
      template: './src/index.html',
      inject: true,
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        API_KEY: JSON.stringify(process.env.API_KEY),
        SERVICE_ID: JSON.stringify(process.env.SERVICE_ID),
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss']
  }
};

module.exports = config;
