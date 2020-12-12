const http = require("http");

const server = http.createServer((request, response) => {
  console.log("リクエストを受けた");
  response.writeHead(200, { "content-type": "text/html" });
  response.end(`<!doctype html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>タイトル</title>
    <style>
      .value {
        font-size: 2rem;
        color: orange;
      }
    </style>
</head>
<body>
    今の時刻は <div class="value">${new Date()}</div>
    パスは <div class="value">${request.url}</div>
</body>
</html>
`);
});

const portNumber = 2520;
server.listen(portNumber);
console.log("サーバーが起動した. http://localhost:" + portNumber.toString());
