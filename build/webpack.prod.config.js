'use strict'
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const prodConfig = {
  mode: 'production',
  devtool: false
}
module.exports = merge(baseConfig, prodConfig)