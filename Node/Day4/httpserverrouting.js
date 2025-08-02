import http from 'http';
 const hostname = 'localhost'
 const port = 3000;

 const server = http.createServer((req,res) => {
    if(req.url == "/"){
        res.end("hello, from other side")
    }
    else if(req.url == "/about"){
        res.end("hello,from the about us side")
    }
    else if(req.url == "/contactus"){
        res.end("contact us for more details")
    }
 });

 server.listen(port,hostname, () => {
    console.log(`Serverrunning at http://${hostname}:${port}/`)
 });