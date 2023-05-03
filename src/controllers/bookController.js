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

const  isHardCover= async(req,res)=>{
  let data= await bookModel.find().populate("publisher");
  let array= data.filter(e=>e.publisher.name=='HarperCollins'||e.publisher.name =="Penguin")
  let arr=[]
   for (let i = 0; i < array.length; i++) {
      const id=array[i]._id
      let update=await bookModel.findByIdAndUpdate(id,{$set:{isHardCover:true}},{new:true})
      arr.push(update)
   }
  return res.send({msg : arr})
}



const updateRating=async(req,res)=>{
  let data= await bookModel.find().populate("author")
  let arr=data.filter(e=>e.author)
  let arr2 = arr.filter(e=>e.author.rating>=3.5)
  let array=[]
  for (let i = 0; i < arr2.length; i++) {
     id=arr2[i]._id;
      prize=(arr2[i].price)+10;
     let final=await bookModel.findByIdAndUpdate(id,{ price:`${prize}`},{new:true})
       array.push(final)
      
  }
  res.send(array)



}



module.exports.createBook = createBook;
module.exports.getBooksData = getBooksData;
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails;
module.exports.isHardCover = isHardCover
module.exports.updateRating = updateRating