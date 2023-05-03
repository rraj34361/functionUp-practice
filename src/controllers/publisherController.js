const publisherModel = require('../models/publisherModel');



const createPublisher = async function(req,res){
    const publisherData = req.body

    const saved = await publisherModel.create(publisherData)
    res.send({msg:saved})
}


          


module.exports.createPublisher = createPublisher