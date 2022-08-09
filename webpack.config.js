const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  target: 'web',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      title: 'Hot Module Replacement',
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/public/', to: './' }],
    }),
  ],
};
