const bookModel = require('../models/bookModel')


const createBook = async function(req,res){
    const bookData = req.body
    const savedData = await bookModel.create(bookData)
     res.send({msg : savedData})

}
const getAllBook = async function(req,res){
    const savedData = await bookModel.find()
     res.send({msg : savedData})

}
const bookList = async function(req,res){
    const savedData = await bookModel.find().select({  _id:0 , bookName:1 , authorName:1 })
     res.send({msg : savedData})

}

const getBooksInYear = async function(req,res){
    const year = req.body.year
    const sendBook = await bookModel.find({year:year})
    res.send({msg : sendBook})
}
const getParticularBooks = async function(req,res){
    const year = req.body
    const sendBook = await bookModel.find(year)
    res.send({msg : sendBook})
}

// const getXINRBooks = async function(req,res){
//     const sendBook = await bookModel.find({
//     price : {indianPrice : { $in : ["100INR" ,"234INR" ,"500INR"]} }
//     })
//     res.send({msg : sendBook})
// }

const getXINRBooks = async function(req,res){
    const sendBook = await bookModel.find({
    $or : [{"price.indianPrice": "100INR"},{"price.indianPrice": "200INR"},{"price.indianPrice": "500INR"}]
    })
    res.send({msg : sendBook})
}


const getRandomBooks = async function(req,res){
    const sendBook = await bookModel.find({
     $or : [ {totalPages : { $gt : 500}},{stockAvailable: true} ]
     } )
    res.send({msg : sendBook})
}



module.exports.createBook = createBook
module.exports.getAllBook = getAllBook
module.exports.bookList =  bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
// module.exports.create = {createBook,getAllBook, bookList,getBooksInYear,getParticularBooks,getXINRBooks}