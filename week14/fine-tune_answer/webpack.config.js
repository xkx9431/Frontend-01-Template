const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:'./carousel.js',
  module :{
    rules:[
      {
        test : /\.js$/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins:[[
              "@babel/plugin-transform-react-jsx",
              {pragma:"createElement"}
            ]]
          }
        }
      }
    ]
  },
  mode: "development",
  optimization:{
    minimize: false
  },
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          filename: 'test.html',
          template: './index.html'
      })
  ]
};