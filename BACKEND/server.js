const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection success');
})

app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
})