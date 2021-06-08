// eslint-disable-next-line @typescript-eslint/no-var-requires
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require('webpack');

//import {HtmlWebpackPlugin}  from 'html-webpack-plugin';

module.exports = {
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],

  module: {
    // rules: [
    //   {
    //     test: /\.(js|jsx|ts)$/,
    //     include: [path.resolve(__dirname, 'src')],
    //     loader: 'babel-loader',
    //     options: {
    //       presets: ["latest"]
    //     }
    //   },
    // ],

    rules: [
      // {
      //   test: /\.(png|jpe?g|gif)$/i,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //     },
      //   ],
      // },

      {
        test: /\.png/,
        use: {
          loader: 'url-loader',
        },
        include: [path.resolve(__dirname, 'src/img')],
      },

      // {
      //   test: /\.(gif|png|jpe?g|svg)$/i,
      //   use: [
      //     'file-loader',
      //     {
      //       loader: 'image-webpack-loader',
      //       options: {
      //         bypassOnDebug: true, // webpack@1.x
      //         disable: true, // webpack@2.x and newer
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.ts?$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 5000,
    contentBase: path.join(__dirname, 'dist'),

    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },
};
