const express = require("express")
const app = express();
const route = require('./home/route/route')
const home = require('./home/home')
var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",route)






app.listen(3000, function(){
    console.log("sever is running on ", 3000 )
})