const path = require('path');


module.exports = {

    entry: {
      App: "./app/assets/scripts/app.js",
      Vendor: "./app/assets/scripts/vendor.js"
    },
    output: {
    filename: "[name].js",
    path: path.resolve(__dirname, './app/temp/scripts')
  },
  devServer: {
    contentBase: './app/temp/scripts'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }
};
