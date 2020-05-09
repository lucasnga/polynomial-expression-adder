const http = require("http");

const finalhandler = require("finalhandler");
const serveStatic = require("serve-static");

const serve = serveStatic("./public/");

const server = http.createServer((req, res) => {
  const done = finalhandler(req, res, {
    onerror: (err) => console.error(err.stack || err.toString()),
  });
  serve(req, res, done);
});

server.listen(3000);
