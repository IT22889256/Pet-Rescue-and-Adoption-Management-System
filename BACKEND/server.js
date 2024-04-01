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
// const complaintRouter = require('./routes/complaint.route');
const petRouter = require('./routes/pet.route')
const adoptionRouter = require('./routes/pet_adoption.route')
const supplyRouter = require('./routes/pet_supply.route')
const appoinmentRouter = require('./routes/appoinment_schedule.route')
const adoptionProcessRouter = require('./routes/adoption_process.route')


//complaint
// app.use("/complain", complaintRouter);
app.use("/petManager", petRouter);
app.use("/adoptionManager", adoptionRouter);
app.use("/adoptionManager", supplyRouter);
app.use("/adoptionManager", appoinmentRouter)
app.use("/adoptionManager", adoptionProcessRouter)



app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});


