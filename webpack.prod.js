var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.[contentHash].js",
    path: path.resolve(__dirname, "dist")
  },

  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), 
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({ 
      filename: "[name].[contentHash].css"
    })
    //new CleanWebpackPlugin(),
  ],

  module:{
    rules:[
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //moving css into a separated file
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};