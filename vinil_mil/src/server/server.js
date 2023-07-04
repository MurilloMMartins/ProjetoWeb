const http = require('http');
const port = 8080;
const server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end('{"message": "Hello, World"}');
    }
})

server.listen(port, () => console.log(`Running on port ${port}`))