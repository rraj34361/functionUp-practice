const mongoose = require('mongoose');
const object_Id = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    userId: {
        type:object_Id,
        ref: "User"
    }, 
    productId: {
        type:object_Id,
        ref: "product"
    }, 
    amount: Number,
    isFreeAppUser : Boolean,
    date : String,
}, { timestamps: true });


module.exports = mongoose.model('order', orderSchema) 

// {
// 	_id: ObjectId("61951bfa4d9fe0d34da86344"),
// 	userId: “61951bfa4d9fe0d34da86829”,
// 	productId: “61951bfa4d9fe0d34da86344”
// 	amount: 0,
// 	isFreeAppUser: true, 
// 	date: “22/11/2021”
// }