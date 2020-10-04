const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry point were webpack will start the bundling, one or more
  entry: './src/js/index.js',

 // output property, the path to the output folder
  output: {
    // path must be a absolute route, we use a build-in node module 'path', a method resolve(current absolute path , and the output folder)
    path: path.resolve(__dirname,'dist'),
    filename: 'js/bundle.js' 
  },

  devServer: {
    // content base, the folder
    contentBase: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  
  module :{
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

// webpack dev server to authomatically reload the page
// HtmlWebpackPlugi it won't create a html file in dist folder until dev or build to do the bundling
// There aare things that are not easy to convert because they did not exist on ES5, this need to polyfill 