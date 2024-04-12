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
const sponserpetRouter = require('./routes/sponserpet.route');


//donations
const donationRouter = require('./routes/donation.route');
const reccuringdonationsRouter = require('./routes/reccuringdonation.route');
const specificneeddonationRouter =require('./routes/specificneeddonation.route');
const sponsorDonationRouter = require('./routes/sponsordonation.route');





//import pet routes

const petRouter = require('./routes/pet.route');


const rescueTask = require('./routes/task.route');
const rescueRequest = require('./routes/rescueRequest.route')
//import adoption routes
const adoptionRouter = require('./routes/pet_adoption.route')
const supplyRouter = require('./routes/pet_supply.route')
const appoinmentRouter = require('./routes/appoinment_schedule.route')
const adoptionProcessRouter = require('./routes/adoption_process.route')
const doctorRouter = require('./routes/pet.route')




//import routes(Schedule)
const Schedule = require('./modules/schedule.model.js');
const scheduleRoute = require('./routes/schedule.route.js');

//import routes(vehicle)
const Vehicle = require('./modules/vehicle.model.js');
const vehicleRoute = require('./routes/vehicle.route.js');

//routes(vehicle)
app.use("/api/vehicles", vehicleRoute);

//routes(Schedule)
app.use("/api/schedules", scheduleRoute);

//rescue task
app.use("/petManager", petRouter);
app.use("/petManager", rescueTask);
app.use("/petManager", rescueRequest);

//import inventory routes
const itemRouter = require('./routes/product.route');
const supplierRouter =  require('./routes/supplier.routes');
const requestRouter = require('./routes/request.route');
const orderRouter = require('./routes/order.route');
const messageRouter = require('./routes/messagesroute.js')

app.use("/inventoryManager",itemRouter);
app.use("/inventoryManager",supplierRouter);
app.use("/inventoryManager",requestRouter);
app.use("/inventoryManager",orderRouter);
app.use("/inventoryManager",messageRouter);
app.use("/suppliers", orderRouter);


app.use("/adoptionManager", adoptionRouter);
app.use("/adoptionManager", supplyRouter);
app.use("/adoptionManager", appoinmentRouter)
app.use("/adoptionManager", adoptionProcessRouter)

app.use("/doctor", doctorRouter)


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


app.use("/petManager", rescueRequest);


app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});


