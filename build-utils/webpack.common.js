const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
 
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
      test: /\.(jpg|png)$/,
      use: {
        loader: 'url-loader',
      },
    },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '..', './src/index.html'),
  }), new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, '..', './dist'),
    filename: 'bundle.js',
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