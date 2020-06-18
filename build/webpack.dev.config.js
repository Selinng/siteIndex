// 'use strict'
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const devConfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./public", // 本地服务器所加载的页面所在的目录
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    port: '3000'
  }
}
module.exports = merge(baseConfig, devConfig)