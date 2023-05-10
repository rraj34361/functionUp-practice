const express = require('express')
const userController = require('../controllers/userController')
const  common = require('../models/middleware/auth')


const route = express.Router()



route.get('/test-me',(req,res)=>{

    
  console.log(req.body)
    res.send({status:true,msg:"its working"})
    
})


route.post('/users',userController.users)
 
route.post('/login',userController.login)

route.get('/users/:userId' , common.isValid, userController.getUserData)

route.put('/users/:userId', common.isValid, userController.update)


route.delete('/users/:userId', common.isValid, userController.deleting)



module.exports = route