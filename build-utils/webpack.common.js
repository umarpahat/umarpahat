const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(jpg|png|svg|gif)$/,
      use: {
        loader: 'url-loader',
      },
    },
    // {test: /\.(jpe?g|png|gif|ico)$/i, loader: 'file?name=[name].[ext]'},
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '..', './src/index.html'),
    favicon: path.resolve(__dirname, '..', './src/image/favicon.ico')
  }), new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    minimize: true,
    minimizer: [new TerserPlugin({
          terserOptions: {
            format: {
              comments: false,
            },
          },
          extractComments: false,
          parallel: true}
    )],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "node_vendors",
          chunks: "all",

        },
      },
    },
  },
  // plugins: [new webpack.HotModuleReplacementPlugin(), new CleanWebpackPlugin(),
  //   new HtmlWebpackPlugin({
  //     template: path.resolve(__dirname, '..', './src/index.html'),
  //   })],
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '..', './dist'),
    hot: true,
  },
};
