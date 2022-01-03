let mongoose = require('mongoose'), 
express = require('express'),
router = express.Router();

let userSchema = require('../models/User');

router.post('/register', (req, res, next) => {
    userSchema.create(req.body, (error, data) => {
        if(error){
            return next(error)
        }else{
            res.json(data);
        }
    })
})

module.exports = router;