const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello shiv, server is working");
  } else if (req.url === "/login") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("you has redirect to login");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`server is listening at http://${hostname}:${port}`);
});
