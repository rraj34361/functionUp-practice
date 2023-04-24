const express = require('express');

const router = express.Router();





router.get('/ravi',function(req,res){
   res.send(`Here is the ravi address`)
})


module.exports = router