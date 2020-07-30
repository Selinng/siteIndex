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
  resolve: {
    // 设置别名
    alias: {
      '@': resolve('/'),
      '~': resolve('/app/')
    }
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
          from: resolve('static'),
          to: 'static',
          // transform: function (content) {
          //   return UglifyJS.minify(content.toString()).code
          // }
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
        test: /\.(jpg|png|gif)$/,
        loader:"url-loader",
        options:{
          limit: 8 * 1024
        }
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        loader:"file-loader",
        options: {
          outputPath: 'font/' //指定这些文件打包后的目录
        }
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