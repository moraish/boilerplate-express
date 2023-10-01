let express = require('express');
let app = express();
let dotEnv = require('dotenv');
let bodyParser = require('body-parser');


// 3.0 USING A MIDDLEWARE TO RENDER CSS
app.use('/public', express.static(__dirname + '/public'));


// 1.0 SENDING A TEXT MESSAGE
app.get('/user', function(req, res) {
    res.send('Welcome to the test app!');
})

// 2.0 SERVING AN HTML PAGE
app.get('/static', function(req, res) {
    var htmlPage = __dirname + '/views/index.html';
    res.sendFile(htmlPage);
})




module.exports = app;
