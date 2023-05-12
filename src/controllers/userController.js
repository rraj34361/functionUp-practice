const userModel = require('./../models/userModel')
const jwt = require('jsonwebtoken')

const users = async function(req,res){
     try{   
    data = req.body

    const details = await userModel.create(data)
    
   res.status(201).send({msg: "account created successfully", details : details})} 
   catch(error){console.log(err), res.status(500).send({error : error.message})}
}


const login = async function(req,res){
   try {userName = req.body.emailId
    password = req.body.password
       if(!userName||!password) return res.send({status : false, error:"invalid user name or password "})
      
       const user = await userModel.findOne({emailId:userName,password:password})

       if(!user) return res.send({status:false,error:"user name or password incorrect"})

       const token = jwt.sign({
        userId : user._id.toString(),    
        email : user.emailId
       },
       "its-a-secret-code",
       );
       res.setHeader("x-auth-token",token);
       res.status(200).send({status:true, token : token})}
       catch(err){console.log(err), res.status(500).send({error : err})}

}

       
      const getUserData = async function(req,res){
       try{
        let userId = req.params.userId;
        const userDetails = await userModel.findById(userId);
    
        if(!userDetails) return res.status(404).send({status:false, msg: "No such user exists"});

        res.status(200).send({status : true, data : userDetails})}
        catch(err){console.log(err), res.status(500).send({error : err})}
      }




      const update = async function (req,res){
       try{ const id = req.params.userId
        const user = await userModel.findByIdAndUpdate(id,{$set : req.body}, {new:true})
        res.status(201).send({status : true, msg:user})}
        catch (error){console.log(err), res.status(500).send({error : err})}
      }



    const deleting = async function(req,res){
      try{  const id = req.params.userId
        const userDelete = await userModel.findByIdAndUpdate(id,{$set:{isDeleted:true}},{new:true})
        res.status(203).send({status:true, msg: "user deleted successfully"})
      }
      catch(err){console.log(err), res.status(500).send({error : err})}
    }



    const postMessage = async function(req,res){
         try{  id = req.params.userId
             const msg = req.body.message
           const user = await userModel.findById(id)
          const updatedPost = user.post    //array   
      
                updatedPost.push(msg)
         const   updatedUser = await userModel.findByIdAndUpdate(id,{$set : {post : updatedPost}},{new : true})

         res.status(201).send({status : true, user : updatedUser})}
         catch(err){console.log(err),res.status(500).send({error : err})}
    }

module.exports.users = users
module.exports.login = login
module.exports.getUserData = getUserData

module.exports.update = update
module.exports.deleting = deleting
module.exports.postMessage = postMessage