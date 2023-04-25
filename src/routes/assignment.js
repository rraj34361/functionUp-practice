const express = require('express')
let arr = [1,2,3,4,6]
let arr2 = [33,34,35,37]

const app = express()

app.get('/sol1',function(req,res) {
    
    
    for(let i =0;i<arr.length-1;i++){   
        ele = arr[i];
        if(ele!=arr[i+1]-1){

       return     res.send(`This number is not present ${arr[i+1]-1}`)
        }


    }

    // res.send('your array is good')

})
app.get('/sol2',function(req,res) {
    
    // console.log(str)
    for(let i =0;i<arr2.length-1;i++){   
        ele = arr2[i];
        if(ele!=arr2[i+1]-1){

       return     res.send(`This is not present inside the array ${arr2[i+1]-1}`)
        }


    }

    // res.send('your array is good')

})
// app.post('sol2',function(req,res){
//     res.send('your sever is working properly')
// })
app.get('/sol2/:id',function(req,res) {
    const id1 = req.params.id
    console.log(typeof id1)
    for(let i =0;i<arr2.length-1;i++){   
        ele = arr2[i];
        if(ele!=arr2[i+1]-1){

       return     res.send(`This is not present inside the array ${arr2[i+1]-1}`)
        }


    }

    // res.send('your array is good')

})
// app.post('sol2',function(req,res){
//     res.send('your sever is working properly')
// })





module.exports = app