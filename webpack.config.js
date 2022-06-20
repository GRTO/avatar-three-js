const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = function build(env, arg) {
  const config = {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, 'dist'),
      chunkFilename: 'chunks/[id].js',
      publicPath: '',
    },
    devServer: {
      static: path.join(__dirname, 'dist'),
      compress: true,
      port: 3000,
      historyApiFallback: true,
      open: true,
    },
    mode: arg.mode,
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ['ts-loader'],
        },
        {
          test: /\.html$/,
          use: { loader: 'html-loader' },
        },
        {
          test: /\.(s*)css$/,
          include: path.resolve(__dirname, 'src'),
          exclude: /node_modules/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/[name].bundle.css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: 'index.html',
      }),
    ],
    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/')],
      extensions: ['.ts', '.tsx', '.jsx', '.js', '.css'],
    },
  };

  return config;
};
