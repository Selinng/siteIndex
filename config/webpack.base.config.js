const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'none',
  entry:  resolve('/app/main.js'),
  output: {
    path: resolve('/build'),
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolve('/app/index.html')//new 一个这个插件的实例，并传入相关的参数
    })
  ]
}