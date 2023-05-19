const express = require('express');
const router = express.Router();
const commonFile = require('./common')
const myUnderscore = require('underscore')
const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
const films = [
    {id: 1, name :'The shining'},
    {id: 2, name :'Incendies'},
    {id: 3, name :'Rang de basanti'},
    {id: 4, name :'Finding Nemo'},

]


router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});


router.get('/test-you', function (req, res) {
    console.log('The exported module is: ',commonFile)
    commonFile.doSomething()
    console.log('This is the constant I created', commonFile.name)
    res.send('Hello there, welcome to this application!')
});

router.get('/test-underscore', function(req, res){
    let result = myUnderscore.first([11,12,23,44,15], 4)
    console.log('the result is',result)
    res.send('done')
})
//problem-1
router.get('/movies', function(req, res){
    res.send(movies)

})

//problem-2 and 3

router.get('/movies/:indexNumber', function(req, res){
    let index = Number(req.params.indexNumber)
    if(index>=movies.length||index<0){
        res.send('invalid indexNumber Please enter a valid indexNumber')
    }
    res.send(movies[index])
    
})



//problem-4
router.get('/films', function(req, res){
    res.send(films)

})

//problem-5

router.get('/films/:filmid', function(req, res){
       let id = Number(req.params.filmid)
       if(id>=films.length||id<=0){
        res.send('No movie exists with this id')
       }
       else{
       res.send(films[id-1])
       }

})








router.get('/cohorts', function (request, response){
    // logic to get the cohorts from database
    // logic tp get only the active cohorts
    // logic to get only the cohort with a size than 50
    // logic to get only the backend cohorts
    response.send(['technetium','nobelium'])
})

router.get('/students', function(req, res){
    // receive or access the query params in the code
    // write a logic on these query params
    // city, score
    console.log(req.query)
    let requestedCity = req.query.city
    let sortField = req.query.sort
    // logic to get students
    res.send(["Sabiha","Neha","Akash","Sonali"])
})

router.get('/students/:studentName', function(req, res) {
    console.log(req.params.studentName)
    /// go to database and search for studentName student
    // store the data found in this variable - studentDetails
    //res.send({data: studentDetails})
    res.send('student data')
})


module.exports = router;
