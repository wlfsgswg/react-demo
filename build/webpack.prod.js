const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const prodConfig = {
  mode: "production", //生产环境
  devtool: "cheap-module-source"
};

module.exports = merge(commonConfig, prodConfig);
