var express = require("express"),
    app = express();

app.use('/', function(res, req){
        console.log('13');
});

app.use('event/add', function(req, res){
        console.log(1);
        res.send("Event Add Page");
});

var port = 3000;

app.listen(port, function(){
        console.log('Server Started on Port: ' + port);
});

