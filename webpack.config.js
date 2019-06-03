const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader'
      }, 
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]_[hash:base64:5]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new GhPagesWebpackPlugin({
      path: './public',
      options: {
          message: 'Update Home Page',
          user: {
              name: '年糕小豆汤',
              email: 'ooiss@qq.com'
          }
      }
    })
  ]
};