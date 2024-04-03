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
const donationRouter = require('./routes/donation.route');
const reccuringdonationsRouter = require('./routes/reccuringdonation.route');
const specificneeddonationRouter =require('./routes/specificneeddonation.route');
const sponsorDonationRouter = require('./routes/sponsordonation.route');





//complaint
app.use("/complain", complaintRouter);
app.use("/petManager", petRouter);

//sponserpet
app.use("/donationManager", sponserpetRouter);


//donations
app.use("/donationManager/donation", donationRouter);
app.use("/donationManager/reccuringdonation", reccuringdonationsRouter);
app.use("/donationManager/specificneedsdonations", specificneeddonationRouter);
app.use("/donationManager/sponsordonation", sponsorDonationRouter);



// app.use('/donationManager',require('./routes/reccuringdonation.route'));


// const rescueTask = require('./routes/task.route');
// app.use("/petManager", rescueTask);

const rescueRequest = require('./routes/rescueRequest.route')
app.use("/petManager", rescueRequest);


app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});


