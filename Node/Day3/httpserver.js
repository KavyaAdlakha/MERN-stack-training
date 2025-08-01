import http from 'http'

// define hostname and port
const hostname = 'localhost';
const port = 3000;

//create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello World!\n');
});

//start the server
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
})