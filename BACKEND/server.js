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
const complaintRouter = require('./routes/complaint.route');
const petRouter = require('./routes/pet.route');
const sponserpetRouter = require('./routes/sponserpet.route');


//donations
const reccuringdonationsRouter = require('./routes/reccuringdonation.route');
const specificneeddonationRouter =require('./routes/specificneeddonation.route');
const sponserdonationRouter = require('./routes/sponsordonation.route');


//complaint
app.use("/complain", complaintRouter);
app.use("/petManager", petRouter);

//sponserpet
app.use("/donationManager", sponserpetRouter);


//donations
app.use("/donationmanager", reccuringdonationsRouter);
app.use("/donationManager", specificneeddonationRouter);
app.use("/donationMnager", sponserdonationRouter);

// app.use('/donationManager',require('./routes/reccuringdonation.route'));



app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});


