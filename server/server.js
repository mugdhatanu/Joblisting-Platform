const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');



dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res) => {
    res.status(200).json({msg: "Server is running"})
})

app.use('/user',userRoutes);
app.use((req,res,next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error);
})

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.json({
        msg: err.message,
        status: err.status || 500
    })     
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Listenting on port ' + process.env.PORT)
    })
})