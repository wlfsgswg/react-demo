const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = {
  entry: {
    bundle: "./index.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]_[hash].[ext]",
              outputPath: "images/",
              limit: 2048
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
        // 去解析less文件时，不仅要装less-loader还要装less
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }

      // babel-loader只是用来和webpack打通@babel/preset-env才是用来转换的模块
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "dist"]
    })
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      // minRemainingSize: 0,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 4,
      automaticNameDelimiter: "~",
      automaticNameMaxLength: 30,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: "vendors.js"
        },
        default:
          // false
          {
            priority: -20,
            reuseExistingChunk: true,
            filename: "common.js"
          }
      }
    }
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "../dist"),
    // 这个东西一定要加否则js会引入出问题
    publicPath: "/"
  }
};
// htmlwebpackplugin会在打包结束后自动生成一个html文件，并把打包生成的js自动引入到这个文件中
// plugins会在某一时刻自动替你做些事情
// 现在知道打包文件bundle.js文件出错，sourceMap它是一个映射关系，它能找到没打包前相对应哪里出错
// webpack Three shaking
/**
 * 打包时候只是把有用的函数方法打包进es
 * Three shaking目前只支持Es module方式
 */
