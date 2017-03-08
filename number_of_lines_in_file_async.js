const path = process.argv[2];
const fs = require("fs");
fs.readFile(path, function (err, data) {
  const bufAsString = data.toString();
  const numberOfLines = Number(bufAsString.split("\n").length) - 1;
  console.log(numberOfLines);
});
