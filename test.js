let express = require('express');
let app = express();
let dotEnv = require('dotenv');
let bodyParser = require('body-parser');


// 3.0 USING A MIDDLEWARE TO RENDER CSS
app.use('/public', express.static(__dirname + '/public'));

// 6.0 CREATE A ROOT LEVEL MIDDLEWARE TO LOG ALL REQUESTS
app.use('/', function(req, res, next) {
    console.log(req.method + ' - ' + req.ip + ' - ' + req.path);
    next();
})

// 1.0 SENDING A TEXT MESSAGE
app.get('/user', function(req, res) {
    res.send('Welcome to the test app!');
})

// 2.0 SERVING AN HTML PAGE
app.get('/static', function(req, res) {
    var htmlPage = __dirname + '/views/index.html';
    res.sendFile(htmlPage);
})

// 3.0 SERVING A JSON
app.get('/json', function(req, res) {
    res.json({'Static': 'Json'});
})

// 4.0 SERVING A JSON BASED ON USER INPUT
app.get('/name/:name', function(req, res) {
    console.log(req.params.name);
    res.send(req.params.name);
})

// 5.0 USING THE .ENV FILE
require('dotenv').config();
app.get('/name-env/:message', function(req, res) {
    if(process.env.MESSAGE_STYLE == 'uppercase') {
        res.send(req.params.message.toUpperCase());
    }
    else {
        res.send(req.params.message.toLowerCase());
    }
})

// 7.0 GETTING PARAMS USING THE QUERY STRING

app.get('/query', function(req, res) {
    res.send(req.query.x + ' ' + req.query.y);
})




module.exports = app;
