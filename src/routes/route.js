const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const authorController = require('../controllers/authorController')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.post('/createAuthor',authorController.createAuthor)

router.get('/list',authorController.list)


router.get('/findUpdate',authorController.findUpdate)

router.get('/findAuthor',authorController.findAuthor)



module.exports = router;