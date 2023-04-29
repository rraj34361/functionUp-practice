const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const route = require('./route/routes')
const {default:mongoose} = require('mongoose');


app.use(bodyParser.json());

mongoose.connect("mongodb+srv://rraj34361:bXgwmkpBz9CHdAfr@cluster0.brjrlou.mongodb.net/Ravi33441?retryWrites=true&w=majority",{
useNewUrlParser : true

}).then(()=>{
    console.log('mongodb is connected')
}).catch((err)=>{console.log(err)})





app.use('/',route);



app.listen(process.env.PORT || 3000, function (){
  console.log("Server is running on",3000)
})



