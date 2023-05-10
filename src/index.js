const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes/route.js')
const {default: mongoose} = require('mongoose')
const app = express()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://rraj34361:bXgwmkpBz9CHdAfr@cluster0.brjrlou.mongodb.net/Ravi34361",{
 useNewUrlParser : true,
})
.then(()=> console.log("MongoDb is connected"))
.catch(err=> console.log(err))



app.use('/',routes)

app.listen(process.env.PORT || 3600 , ()=>{
    console.log("Express app is running on port " + (process.env.PORT||3600) )
} )
