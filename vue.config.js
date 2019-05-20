const path = require("path");
const webpack = require("webpack");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// 将json文件暴露出去，让axios能访问
var buildingData = require("./src/utils/basisPlatform.json");
var socialUnit = require("./src/utils/socialUnit.json");

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  configureWebpack: config => {
    config.externals = {
      "BMap": "BMap",
      "echarts": "echarts"
    };
  },
  // webpack 配置
  chainWebpack: config => {
    config.resolve.alias
      .set("@$", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("utils", resolve("src/utils"));
  },
  // webpack-dev-server 配置
  devServer: {
    // 自动启动浏览器
    open: true,
    // 端口号
    port: 8888,
    before(app) {
      app.get("/api/building", (req, res, next) => {
        res.json({
          // 这里是你的json内容
          data: buildingData
        })
      })
      app.get("/api/socialUnit", (req, res, next) => {
        res.json({
          // 这里是你的json内容
          data: socialUnit
        })
      })
    }
  }
};