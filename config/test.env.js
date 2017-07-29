/**
 * Created by YINBAOBAO on 2017/7/29.
 */
var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
