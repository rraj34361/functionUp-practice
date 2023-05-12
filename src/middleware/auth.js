const jwt = require('jsonwebtoken')



const isValid = function(req,res,next){
    try{
    const token = req.headers["x-auth-token"]
    if(!token) return res.status(400).send({status: false, error:"access token is not present"})
    decodedToken = jwt.verify(token, "its-a-secret-code")
    // if(!decodedToken) return res.send({status: false , error : "token is invalid"})
    if(decodedToken.userId!=req.params.userId) return res.status(403).send({status: false , msg : "you have not authorization to perform this task" })
    next()

}catch(error){res.status(403).send({error : error})}}

module.exports.isValid = isValid
