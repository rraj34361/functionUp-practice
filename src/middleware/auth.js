const jwt = require('jsonwebtoken')



const isValid = function(req,res,next){
    const token = req.headers["x-auth-token"]
    try{
    if(!token) return res.send({status: false, error:"access token is not present"})
    decodedToken = jwt.verify(token, "its-a-secret-code")
    // if(!decodedToken) return res.send({status: false , error : "token is invalid"})
    if(decodedToken.userId!=req.params.userId) return res.status(400).send({status: false })
    next()

}catch(error){res.send({error : error})}}

module.exports.isValid = isValid