const path = require("path");
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: config => {
    config.externals = {};
  },
  // webpack 配置
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
  },
  // webpack-dev-server 配置
  devServer: {
    // 自动启动浏览器
    open: true,
    // 端口号
    port: 8888
  }
};