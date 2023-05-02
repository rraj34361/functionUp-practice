const authorModel = require("../models/authorModel");
const bookModel = require("../models/bookModel");
const publisherModel = require("../models/publisherModel");

const createBook = async function (req, res) {
  let book = req.body;

  if (!book.author || !book.publisher) {
    if (!book.author) {
   return    res.send({ error: "you have to give authorId" });
    } else {
   return    res.send({ error: "you have to give publisherId" });
    }
  } else {
    if(/[g-z]/.test(book.author)||/[g-z]/.test(book.publisher)){ 
        if(/[g-z]/.test(book.author)) {
            return res.send({error:"invalid author_id"})}
            else{
                return res.send({error:'invalid publisher_id'})
            }
    }
    const validateAuthorId = await authorModel.findById({ _id: book.author });
    const validatePublisherId = await publisherModel.findById({
      _id: book.publisher,
    });
    if (!validateAuthorId || !validatePublisherId) {
      if (!validateAuthorId) {
       return  res.send({ error: "author is not present" });
      } else {
       return res.send({ error: "publisher is not present" });
      }
    }
    let bookCreated = await bookModel.create(book);
    return res.send({ data: bookCreated });
  }
};

const getBooksData = async function (req, res) {
  let books = await bookModel.find();
  res.send({ data: books });
};

const getBooksWithAuthorDetails = async function (req, res) {
  let specificBook = await bookModel.find().populate("author").populate("publisher");
  res.send({ data: specificBook });
};

module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
