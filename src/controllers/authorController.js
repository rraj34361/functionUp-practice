const authorModel = require('../models/authorModel')
const bookModel = require('../models/bookModel')

const createAuthor = async function (req,res) {
   const  data = req.body
   const savedData = await authorModel.create(data)
    res.send({msg: savedData})
}


const list = async function (req,res){
    const autherData = await authorModel.findOne({author_name : "Chetan Bhagat"})
    const author_id = autherData.author_id
   const books = await bookModel.find({ author_id : author_id })
   res.send({ msg : books })
}



const findUpdate = async function(req,res){
    const book = await bookModel.findOneAndUpdate({name :"Two states"}, {price : 100},{new: true}).select({author_id:1,_id:0,price:1})

    const author_id = book.author_id
    const author_name = await authorModel.findOne({author_id:author_id}).select({author_name:1, _id:0})
  res.send({ msg1:author_name, updatedPrice:book})

}

const findAuthor = async function(req,res){
    const author_id = await bookModel.find({price : { $gte: 50, $lte:100}}).select({author_id:1,_id:0})
    console.log(author_id)
    const author = await authorModel.find({author_id:2})
    console.log(author)
    res.send({msg: author})
}



module.exports.createAuthor = createAuthor
module.exports.list = list
module.exports.findUpdate = findUpdate
module.exports.findAuthor = findAuthor