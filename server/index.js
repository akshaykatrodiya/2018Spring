/*
// -----------------------------------class7-----------------------------------------
// Create a simple server
const http = require('http');

// Create a server object
const server = http.createServer(function (req, res) {
    res.write('Hello World!'); // write a response to Hello World
    res.end(); //end of response
});

server.listen(8080);

console.log("Listening on http://localhost:8080");
*/

// --------------------------------


var express = require('express')
var app = express()

app
    .use(function(req, res, next) {
        res.write('This is provided by newpaltz.edu\r\n');
        next();
        // res.end();
    })
    // respond with "hello world" when a GET request is made to the homepage
    .get('/hello', function (req, res) {
    res.write('world');
    res.write('world');
    res.end();
    })

    .get('/goodbye', function (req, res) {
        res.write('new paltz');
        res.end();
    })

    .listen(8080);
