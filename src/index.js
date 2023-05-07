const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://rraj34361:bXgwmkpBz9CHdAfr@cluster0.brjrlou.mongodb.net/Ravi34361?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

// unreachable becuase the cycle has terminated
app.use(
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        next();
  }
);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
