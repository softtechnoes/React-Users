let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

const userRoutes = require('../backend/routes/users.route');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db).then(() => {
    console.log('Database connected successfully')
},
error =>{
    console.log("Couldn't connect to database", error)
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/users/', userRoutes);

app.use( function(err, req, res, next){
    console.error(err.messgae)
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.messgae);
});