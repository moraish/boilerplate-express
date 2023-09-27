let express = require('express');
let app = express();
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


 module.exports = app;
