const webpack = require("webpack");
const merge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const devConfig = {
  // mode: 'production',//生产环境
  mode: "development", //开发环境
  // inline-source-map使用inline-source-map会把bundle错误一一映射到打包前出错的地方，并且把bundle.js.map文件直接注入打包文件
  // cheap-inline-source-map如果加个cheap，打包只告诉行，build速度更快
  // cheap-module-inline-source-map 加上module，引入的module里面的错误也能出来
  // eval打包最快
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    // open: true,
    // historyApiFallback: true,
    port: 9999,
    hot: true,
    hotOnly: true,
    host: "127.0.0.1"
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};

module.exports = merge(commonConfig, devConfig);
// htmlwebpackplugin会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个文件中
// plugins会在某一时刻自动替你做些事情
// 现在知道打包文件bundle.js文件出错，sourceMap它是一个映射关系，它能找到没打包前相对应哪里出错
