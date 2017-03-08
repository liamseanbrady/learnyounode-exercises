const path = process.argv[2];
const fs = require("fs");
const buf = fs.readFileSync(path);
const bufAsString = buf.toString();
const numberOfLines = Number(bufAsString.split("\n").length) - 1;
console.log(numberOfLines);
