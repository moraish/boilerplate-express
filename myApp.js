let express = require('express');
let app = express();
require('dotenv').config();

// console.log('Hello World!');

// CHALLENGE 1
// app.get("/", function(req, res) {
//     res.send('Hello Express')
// })

// CHALLENGE 2 - SERVING STATIC ASSETS
// app.get("/", function(req, res) {
//     htmlFile = __dirname + '/views/index.html'
//     res.sendFile(htmlFile);
// })

// app.use("/public", express.static(__dirname + '/public'));


// SERVING JSON and using the .ENV FILE

app.get('/json', function(req, res) {
    res_json = {"message": "Hello json"};
    message_style = process.env.MESSAGE_STYLE;
    if(message_style == 'uppercase') {
        res_json['message'] = "HELLO JSON"
    }
    res.json(res_json);
})

 module.exports = app;
