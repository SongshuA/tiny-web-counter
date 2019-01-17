var express = require('express');
var bodyParser = require('body-parser');
var counters = require('./counter.json');
var config = require('./config.json');

const app = express();


app.use('/client' ,express.static('./client'));


app.get('/count', function(req, res){
    var key = req.query['key'];
    if(counters[key] === undefined){
        res.end('0');
        return;
    }
    res.end(counters[key] + "");
});


app.post('/count', bodyParser.json(), function(req, res){
    var key = req.body['key'];
    if(counters[key] === undefined){
        res.end('error');
        return;
    }
    res.end((++counters[key]) + "");
});


app.listen(config.port, function(){
    console.log('server listening at port ' + config.port + '...');
});