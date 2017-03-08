const fs = require("fs");
const path = require("path");

module.exports = function (dirPath, filter, callbackFunction) {
  fs.readdir(dirPath, function(err, list) {
    if (err) return callbackFunction(err);
    filteredList = list
      .filter(file => path.extname(file) === `.${filter}`)
    callbackFunction(null, filteredList);
  });
}
