module.exports = function Routes(app, server) {

    // this gets the socket.io module
    var io = require('socket.io').listen(server);

    // root route to render index.ejs
    app.get('/', function(req, res) {
        res.render('index');
    })

    io.sockets.on('connection', function (socket) {

    })

}