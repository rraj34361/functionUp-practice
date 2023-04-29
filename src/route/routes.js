const express = require('express');
const router = express.Router();
// const userModel = require('../models/usermodel')
const userController = require('../controller/uesrController')
const bookController = require('../controller/bookController')


//FOR TESTING PURPOSE
router.get('/test-me',function(req, res){

    res.send({msg:"working well"})
})


  //FOR STROING DATA OF USERS
router.post('/createUser', userController.createUser )    

  
router.get('/getAllUser', userController.getAllUser )


// FOR STORING DATA OF BOOKS 
router.post('/createBook', bookController.createBook )


router.get('/getAllBook', bookController.getAllBook )

router.get('/bookList', bookController.bookList)

router.post('/getBooksInYear',bookController.getBooksInYear)

router.post('/getParticularBooks',bookController.getParticularBooks)

router.get('/getXINRBooks',bookController.getXINRBooks)
  
router.get('/getRandomBooks',bookController.getRandomBooks)

module.exports = router;