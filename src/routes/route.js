const express = require('express');
const lodash = require('lodash');
const { route } = require('express/lib/application');
const router = express.Router();
const commonFile = require('./common')
// const Additional = require('./Additional/Extra')
const logger = require('../logger/logger')
const  util = require('../util/helper')
const formatter =  require('../validator/formatter')
const  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const odd = [1,3,5,7,9,11,13,15,17,19] 


let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]

router.get('/test-me', function (req, res) {
    logger.welcome("Ravi")
    util.date()
    util.currentMonth()
    util.getBatchInfo("technetium","W5D1","Nodejs module system")
    formatter.trim()
    formatter.toLowerCase()
    formatter.toUpperCase()

    let x = lodash.chunk(months,3);
    console.log(x)

    let y = lodash.tail(odd)
    console.log(y)


    let z = lodash.union([23,43,23,44],[43,65,75,45],[45,22,12,23],[75,57,98,22],[78,98,45,33])
  console.log(z)


  console.log(lodash.fromPairs(pairs))
    res.send('This should be working!' )
});

router.get('/test-you', function (req, res) {
    console.log('This is the constant I created', commonFile.mySelf)
   
    console.log('This is the constant I created', commonFile.func())
    

   
    res.send(`Hello there, welcome to this application! ${new Date()}` )
});


module.exports = router;