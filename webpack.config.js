const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/js/symplyr.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "symplyr.js",
    publicPath: "/dist",
    library: "Symplyr",
    libraryTarget: "umd",
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "./src/js")],
        exclude: /(node_modules)/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "./src/styles")],
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
