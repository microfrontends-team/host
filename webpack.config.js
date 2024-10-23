const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    hot: true,
    liveReload: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        microA: 'microA@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
