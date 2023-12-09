const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParse = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');


dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/',(req,res) => {
    res.status(200).json({msg: "Server is running"})
})

app.use('/user',userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Listenting on port ' + process.env.PORT)
    })
})