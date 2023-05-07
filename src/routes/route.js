const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const userController= require("../controllers/userController")
const productController= require("../controllers/productController.js")
const orderController = require('./../controllers/orderController.js')
const commonMW = require ("../middlewares/commonMiddlewares")
const orderModel = require('./../models/orderModel.js')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", commonMW.isValid , userController.createUser  )

router.post('/createProduct',  productController.createProduct)


router.post("/createOrder", commonMW.isValid , commonMW.validIds, commonMW.exist, orderController.createOrder)

module.exports = router;