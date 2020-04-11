var express = require('express');
var app = express();
var port = 3000;
app.get('/',function(request,responese){
    responese.send('Hello wordl');
});
app.listen(port,function(){
    console.log('server listening port ' + port);
})