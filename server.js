var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

server.listen(3000, function() {
  console.log('Server listening on port 3000');
});

app.get('/', function(request, response) {
  response.render('index')
});

module.exports = server;
