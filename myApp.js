let express = require('express');
let app = express();
let bodyParser = require('body-parser');

require('dotenv').config();

// console.log('Hello World!');

// CHALLENGE 1

app.get("/static", function(req, res) {
    res.send('Hello Express')
})

// CHALLENGE 2 - SERVING STATIC ASSETS

app.get("/", function(req, res) {
    htmlFile = __dirname + '/views/index.html'
    res.sendFile(htmlFile);
})


// USING A MIDDLEWARE

app.use("/public", express.static(__dirname + '/public'));

// SERVING JSON and using the .ENV FILE

app.get('/json', function(req, res) {
    res_json = {"message": "Hello json"};
    message_style = process.env.MESSAGE_STYLE;
    if(message_style == 'uppercase') {
        res_json['message'] = "HELLO JSON"
    }
    res.json(res_json);
})


// CREATE A ROOT LEVEL MIDDLEWARE THAT LOGS ALL REQUESTS

app.use("/", function(req, res, next) {
    console.log(req.method + ' ' + req.path + ' - ' + req.ip);
    next(); 
})


// CHAINING A MIDDLEWARE TO CREATE A TIMESERVER

app.get('/now', function(req, res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.send({time: req.time});
})

// GETTING PARAMETERS FROM THE USER

app.get('/:word/echo', function(req, res) {
    res.json({echo: req.params['word']});
})

// GETTING PARAMETERS USING QUERY STRING

app.get('/name', function(req, res) {
    res.json({name: req.query.first + ' ' + req.query.last});
})



module.exports = app;
