var express=require('express');
var path=require('path');
var app=express();


app.use(express.static(path.join(__dirname, 'public')));    

app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname,'main/index.html'));
    

});


app.get('/login',function(req,res)
{
    res.sendFile(path.join(__dirname,'main/login.html'));
    

});


app.listen(8080);