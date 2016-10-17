var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var server = app.listen(7200, function () {
    console.log('This is the survey form revisited, Port 7100');
});

var route = require('./routes/routes.js')(app, server);






