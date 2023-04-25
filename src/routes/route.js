const express = require('express')
const router = express.Router()
const array = [{
    "name": "manish",
    "dob": "1/1/1995",
    "gender": "male",
    "city": "jalandhar",
    "sports": [
    "swimming"
    ]
    }
    ]



router.post('/players',function(req,res){
let details = req.body
for(let i =0;i<array.length;i++){
if(array[i].name==details.name){
    return  res.status(200).send(`This player details already present`)
}
}
array.push(details)
return  res.send(array)
})


module.exports = router