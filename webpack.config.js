const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./app/src/js/app.js",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "app/dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerWebpackPlugin(), "..."],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app/src/index.html"),
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 3000,
  },
};
