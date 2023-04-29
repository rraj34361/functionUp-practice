   const userModel = require('../models/usermodel')

const createUser = async function(req, res){
    const data = req.body
    let savedData = await userModel.create(data)   //using await for making it synchronous
    res.send({msg:savedData})
}

const getAllUser = async function(req, res){

    let savedData = await userModel.find()         //using await for making it synchronous

    res.send({msg:savedData})
}
module.exports.createUser = createUser
module.exports.getAllUser = getAllUser