// Time format - YYYY-MM-DD hh:mm
net = require("net");

const port = Number(process.argv[2]);

const server = net.createServer(function (socket) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  socket.end(`${year}-${month >= 10 ? month : "0" + month}-${day >= 10 ? day : "0" + day} ${hours}:${minutes}\n`);
});

server.listen(port);
