var app = require('./app');

var server = require('http').Server(app);

server.listen(8088, () => 
{
    console.log('Se prendio esta mierda')
})