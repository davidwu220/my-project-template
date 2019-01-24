const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
require('@babel/register');

const config = {
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // Configure how modules are resolved. 
  // resolve -> extensions: Automatically resolve certain extensions.
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  // webpack supports modules written in a variety of languages and preprocessors,
  // via loaders. Loaders describe to webpack how to process non-JavaScript modules 
  // and include these dependencies into your bundles.
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './dist/index.html',
      filename: 'index.html',
      hash: true
    })
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
}

module.exports = config;