const path = require('path');


module.exports = {

    entry: "./app/assets/scripts/app.js",
    output: {
    filename: "app-bundle.js",
    path: path.resolve(__dirname, './app/temp/scripts')
  }
};
