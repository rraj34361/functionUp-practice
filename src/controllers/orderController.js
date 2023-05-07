const productModel = require("../models/productModel");
const userModel = require("../models/userModel");
const orderModel = require("./../models/orderModel");

const createOrder = async function (req, res) {
  const data = req.headers.isfreeappuser;
  const userId = req.body.userId;
  const productId = req.body.productId;

  const user = await userModel.findById(userId);
  const product = await productModel.findById(productId);
  const more = user.balance - product.price;

  if (data == "false") {
    if (more > 0) {
      const userBalance = await userModel.findByIdAndUpdate(
        userId,
        { $set: { balance: more } },
        { new: true }
      );
      req.body.amount = product.price
      const   orderinfo = req.body
    const   orderConfirm = await orderModel.create(orderinfo)
      res.send({ msg: "order created successfully" ,orderDetails:orderConfirm});
    } else if (more < 0) {
      res.send({ error: ` insufficient balance` });
    }
  }
  else{
      
    req.body.amount = 0
    const   orderinfo = req.body
  const   orderConfirm = await orderModel.create(orderinfo)
     const populated = await orderModel.find().populate('userId')
              
    res.send({msg: populated})

  }
};

module.exports.createOrder = createOrder;
