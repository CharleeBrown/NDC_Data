const http = require("http");
const hostname = "127.0.0.1";
const port = 8200;

// Create HTTP Server
const server = http.createServer((req, res) => {
    //Set the response HTTP header with HTTP status and Content
    res.writeHead(200, {'Content-Type':'text/plain'});

    // Send the response body "Hello World"
    res.end('What up tho');


});

// Prints a log to the console once the server starts listening. 
    server.listen(port, hostname,() => {
        console.log('Server running at http://${hostname}:${port}/')

    })