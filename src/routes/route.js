const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require('../controllers/publisherController')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)           //main target.

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post('/createPublisher', publisherController.createPublisher)


router.put('/isHardCover',bookController.isHardCover)

router.put('/updateRating',bookController.updateRating)
module.exports = router;





//write a program to add two numbers

