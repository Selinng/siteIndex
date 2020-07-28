const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJS = require('uglify-es')
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'none',
  entry:  resolve('/app/main.js'),
  output: {
    path: resolve('/dist'),
    filename: 'bundle-[hash].js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify: false,
      template: resolve('/app/index.html')//new 一个这个插件的实例，并传入相关的参数
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: resolve('lib'),
          to: 'lib',
          transform: function (content) {
              return UglifyJS.minify(content.toString()).code
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  }
}