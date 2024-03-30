const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')
require('dotenv').config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URL_TEST;

mongoose.connect(URL);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection success');
})

//import routes
const petRouter = require('./routes/pet.route');
// const sideBarRouter = require('./routes/sideBar.route');
const rescueTask = require('./routes/task.route');
//request
const rescueRequest = require('./routes/rescueRequest.route')
//rescue task

app.use("/petManager", petRouter);
app.use("/petManager", rescueTask);
app.use("/petManager", rescueRequest);

app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});