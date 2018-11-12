const path = require('path');


module.exports = {

    entry: "./app/assets/scripts/app.js",
    output: {
    filename: "app-bundle.js",
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
