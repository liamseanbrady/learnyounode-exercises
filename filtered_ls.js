const path = process.argv[2];
const filter = process.argv[3];
const fs = require("fs");
const pathMod = require("path");

fs.readdir(path, function (err, list) {
  if (err) console.log(err)
  list
    .filter(file => pathMod.extname(file) === `.${filter}`)
    .forEach(file => console.log(file));
});
