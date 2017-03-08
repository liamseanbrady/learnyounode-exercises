filteredLs = require("./filtered_ls_module");
dirPath = process.argv[2];
filter = process.argv[3];

filteredLs(dirPath, filter, function(err, filteredList) {
  if (err) console.error(err)
  filteredList.forEach(fileName => console.log(fileName));
});
