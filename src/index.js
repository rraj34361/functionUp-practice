const express = require('express');
// var bodyParser = require('body-parser');
const first = require('./routes/firstserver')

const route = require('./routes/route.js');
const assignment = require('./routes/assignment.js')

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);
app.use('/solve',assignment)
app.use('/first', first)

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});


