const express = require('express')
const router = express.Router()
let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
  



router.get('/persons',function(req,res){
    let age = req.query.age
    persons.forEach(ele=>{
        ele.age>=age ? ele.votingStatus=true: ele.votingStatus=false;
    })
  let voting = persons.filter(ele=>ele.votingStatus==true)

    res.send(voting)
})






module.exports = router