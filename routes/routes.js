module.exports = function Routes(app, server) {

    // this gets the socket.io module
    var io = require('socket.io').listen(server);

    var counter = 0;

    // root route to render index.ejs
    app.get('/', function(req, res) {
        res.render('index');
    })

    io.sockets.on('connection', function (socket) {
    
            socket.on('push-button', function (data) {
                counter += 1;

                io.emit('push-counter', {response: counter});
            });

            socket.on('reset-counter', function (data) {
                counter = 0;
                io.emit('reset-response', {response: counter});
            })
    })

}