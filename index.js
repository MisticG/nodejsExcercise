const fs = require('fs');
const http = require('http');

const { red, white, blue, bold } = require('kleur');

const hostName = '127.0.0.1';
const port = 3000;

var server = http.createServer(function (req, res) {
    
    fs.readFile('index.html', function(err, data) {
        if(err) {
            console.log(err);
            res.statusCode = 500;
            res.end();
            return;
        }
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
      return;
    });
});

server.listen(port, hostName, () => {
    console.log(blue('server running at http://' + hostName + ":" + port));
});
