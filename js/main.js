const http = require("http");
const hostname = "127.0.0.1";
const port = 8200;
const url = require("url");
const fs = require("fs");


// Tutorial via https://www.c-sharpcorner.com/article/creating-server-and-host-html-page-using-node-js/
const server = http.createServer((req, res) => {
    const path = url.parse(request.url).pathname;
    switch (path) {
        case '/':
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.end('What up tho');
            break;
        case '/main.html':
            fs.readFile(_dirname + path, function (err, data) {
                if (err) {
                    res.writeHead(404);
                    res.write(error);
                    res.end();

                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/plain'
                    });
                    res.write(data);
                    res.end();
                }
            });
            break;
    }
});

// Prints a log to the console once the server starts listening. 
server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/')

});