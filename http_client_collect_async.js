const http = require("http");

const firstURL = process.argv[2];
const secondURL = process.argv[3];
const thirdURL = process.argv[4];

let firstData = "";
let secondData = "";
let thirdData = "";

let data = {
  first: { finished: false, data: "" },
  second: { finished: false, data: "" },
  third: { finished: false, data: "" }
}

let responseData = {};

function getDataForURL(url, dataSource, key) {
  http.get(url, function(response) {
    response.setEncoding("utf8");
    response.on("data", (data) => dataSource[key].data += data);
    response.on("error", (error) => dataSource[key].data += error);
    response.on("end", function() {
      dataSource[key].finished = true;
      if (data["first"].finished && data["second"].finished && data["third"].finished) {
        logData(dataSource);
      }
    });
  }).on("error", console.error);
}

function logData(data) {
  console.log(data["first"].data);
  console.log(data["second"].data);
  console.log(data["third"].data);
}

getDataForURL(firstURL, data, "first");
getDataForURL(secondURL, data, "second");
getDataForURL(thirdURL, data, "third");
