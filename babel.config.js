module.exports = {
  presets: ["@vue/app", ["@babel/env", { "modules": false }]],
  plugins: [
    "@babel/transform-runtime",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
