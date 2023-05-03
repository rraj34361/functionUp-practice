const mongoose = require('mongoose');
// const {newE,isHard,upd,ratting} = requiure('../../newbookM.js')

const publisherSchema = new mongoose.Schema({
   name: String,
   headQuarter: String

})


module.exports = mongoose.model('LibraryPublisher',publisherSchema)





// {
//     _id: ObjectId("61951bfa4d9fe0d34da86344"),
// name: “Penguin”,
// headQuarter: “New Delhi”,
// }
