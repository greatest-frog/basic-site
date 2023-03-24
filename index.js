let http = require("http");
let url = require("url");
let fs = require("fs");

http
  .createServer((req, res) => {
    let q = url.parse(req.url, true);
    let filename = "." + (q.pathname === "/" ? "/index.html" : q.pathname);
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(302, {
          Location: "/404.html",
        });
        return res.end();
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      return res.end();
    });
  })
  .listen(8000);
