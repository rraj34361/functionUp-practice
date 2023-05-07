const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const productModel = require('../models/productModel')


const isValid= function ( req, res, next) {
    const head = req.headers.isfreeappuser
    if(!head){
        res.send({error: "you are missing a mandatory header"})
    }
   else{
    // console.log(head)
    req.body.isFreeAppUser = head
    next()
   }
}

const validIds= function ( req, res, next) {
    const product = req.body.productId 
    const user = req.body.userId
if(!mongoose.isValidObjectId(product)){
    res.send({error:"invalid product id"})
}
else if(!mongoose.isValidObjectId(user)){
      
    res.send({error:"invalid user id"})
}
else{
    next()
}

}

const exist = async function (req, res, next){
    const product = req.body.productId
    const user = req.body.userId
    const userExist =  await userModel.findById(user)
    const productExist =  await productModel.findById(product)
    if(!userExist||!productExist){
        if(!userExist){
            res.send({error:"user with this Id doesn't exist"})
        }
        else{
            res.send({error : "product with this Id doesn't exist"})
        }
    }
    else{
        next()
    }

}




module.exports.isValid= isValid
module.exports.validIds = validIds

module.exports.exist = exist


