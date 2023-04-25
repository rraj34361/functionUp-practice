let express = require('express')
const router = express.Router();
const { route } = require('express/lib/application');

router.get("/about",function(req,res){
    res.send("Ghar pr aa gye")
})



module.export = router
