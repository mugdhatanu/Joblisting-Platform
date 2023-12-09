const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/',(req,res) => {
    res.status(200).json({msg: "Server is running"})
})

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Listenting on port ' + process.env.PORT)
    })
})