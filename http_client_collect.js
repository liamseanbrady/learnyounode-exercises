const http = require("http");
const url = process.argv[2];

http.get(url, function(response) {
  response.setEncoding("utf8");
  let accData = "";
  response.on("data", (data) => accData += data);
  response.on("error", (error) => accData += error);
  response.on("end", () => console.log(accData.length + "\n" + accData));
}).on("error", console.error);
