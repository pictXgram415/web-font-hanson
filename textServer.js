const http = require("http");

const server = http.createServer((request, response) => {
    console.log("リクエストを受けた");
    response.writeHead(200, { "content-type": "text/plain" });
    response.end(`
a
b
c
`);
});

const portNumber = 2520;
server.listen(portNumber);
console.log("サーバーが起動した. http://localhost:" + portNumber.toString());