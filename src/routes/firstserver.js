const express = require('express');

const app = express();
const PORT = 30;

app.get('/home',function(req,res){
    res.send('your sever is working properly')
})
app.get('*',function(req,res){                   //default
    res.send('not')
})
app.post('/post',function(req,res){ 
    console.log(req.body)
    res.send('your sever is working ')
})





app.listen(PORT)
console.log('sevre is runnig',PORT)


module.exports = app