const jwt = require('jsonwebtoken')



const isValid = function(req,res,next){
    const token = req.headers["x-auth-token"]
    try{
    if(!token) return res.send({status: false, error:"access token is not present"})
    decodedToken = jwt.verify(token, "its-a-secret-code")
    
    if(!decodedToken) return res.send({status: false , error : "token is invalid"})

    next()

}catch(e){res.send({error : `token is invalid`})}}

module.exports.isValid = isValid