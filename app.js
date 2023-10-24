const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Conent-Type': 'application/json, text/plain'})
    fs.readFile('index.html', function (error, data) {
        if (error) {
            res.writeHead(404);
            error("Index file is missing");

        } else {
            res.write(data)
        }
        res.end()
    })
    fs.readFile('scripts/index.js', function (error, data) {
        if (error) {
            res.writeHead(404);
            error("Index file is missing");

        } else {
            res.write(data)
        }
        res.end()
    })

})


server.listen(port, function (error) {
    if (error) {
        console.log("server doesnt work", error);
    } else {
        console.log("Server works on port", + port);
    }
})