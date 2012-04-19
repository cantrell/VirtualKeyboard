var app = require('http').createServer(handler);
var io = require('socket.io').listen(app);
var fs = require('fs');

app.listen(8000);

function handler (req, res) {
    var startIndex = 1;
    var lastIndex = req.url.indexOf('#');
    if (lastIndex == -1) lastIndex = req.url.length;
    var fileName = req.url.substring(startIndex, lastIndex); 
    fs.readFile(__dirname + '/' + fileName,
                function (err, data) {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error loading index.html');
                    }
                    res.writeHead(200);
                    res.end(data);
                });
}

var terminal, left, right;

io.sockets.on('connection', function (socket) {

    socket.on('terminal', function (data) {
        terminal = socket;
    });

    socket.on('left', function (data) {
        left = socket;
    });

    socket.on('right', function (data) {
        right = socket;
    });

    socket.on('enable', function (data) {
        if (left) left.emit('enable', data);
        if (right) right.emit('enable', data);
    });

    socket.on('keystroke', function (data) {
        if (terminal) terminal.emit('keystroke', data);
    });

});
