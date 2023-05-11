const userModel = require('./../models/userModel')
const jwt = require('jsonwebtoken')

const users = async function(req,res){
        
    data = req.body

    const details = await userModel.create(data)
    
   res.send({msg: "account created successfully", details : details})
}


const login = async function(req,res){
    userName = req.body.emailId
    password = req.body.password
       if(!userName||!password) return res.send({status : false, error:"invalid user name or password "})
      
       const user = await userModel.findOne({emailId:userName,password:password})

       if(!user) return res.send({status:false,error:"user name or password incorrect"})

       const token = jwt.sign({
        userId : user._id.toString(),
        email : user.emailId
       },
       "its-a-secret-code"
       );
       res.setHeader("x-auth-token",token);
       res.status(200).send({status:true, token : token})         
}

       
      const getUserData = async function(req,res){
       
        let userId = req.params.userId;
        const userDetails = await userModel.findById(userId);
    
        if(!userDetails) return res.status(404).send({status:false, msg: "No such user exists"});

        res.status(200).send({status : true, data : userDetails})
      }


      const fetchUser = async function(req,res){
        const id = req.params.userId
     
        const details = await userModel.findById(id)
        res.send({status:true, msg : details})
      }



      const update = async function (req,res){
        const id = req.params.userId
        const user = await userModel.findByIdAndUpdate(id,{$set : req.body}, {new:true})
        res.send({status : true, msg:user})
      }



    const deleting = async function(req,res){
        const id = req.params.userId
        const userDelete = await userModel.findByIdAndUpdate(id,{$set:{isDeleted:true}},{new:true})
        res.send({status:true, msg: "user deleted successfully"})
    }



    const postMessage = async function(req,res){
           id = req.params.userId
             const msg = req.body.message
           const user = await userModel.findById(id)
          const updatedPost = user.post
      
                updatedPost.push(msg)
         const   updatedUser = await userModel.findByIdAndUpdate(id,{$set : {post : updatedPost}},{new : true})

         res.status(201).send({status : true, user : updatedUser})
    }

module.exports.users = users
module.exports.login = login
module.exports.getUserData = getUserData
module.exports.fetchUser = fetchUser
module.exports.update = update
module.exports.deleting = deleting
module.exports.postMessage = postMessage