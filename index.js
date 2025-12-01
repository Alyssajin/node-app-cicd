var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/about', function (req, res) {
    res.send('About Us');
});

app.get('/status', function (req, res) {
    res.send('Status: OK');
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 3000) + '!');
});

module.exports = app;