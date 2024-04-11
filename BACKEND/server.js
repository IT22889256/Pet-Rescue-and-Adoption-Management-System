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

//import pet routes
// const complaintRouter = require('./routes/complaint.route');
const petRouter = require('./routes/pet.route')
const rescueTask = require('./routes/task.route')
const rescueRequest = require('./routes/rescueRequest.route')

//import adoption routes
const adoptionRouter = require('./routes/pet_adoption.route')
const supplyRouter = require('./routes/pet_supply.route')
const appoinmentRouter = require('./routes/appoinment_schedule.route')
const adoptionProcessRouter = require('./routes/adoption_process.route')
const doctorRouter = require('./routes/pet.route')



app.use("/petManager", petRouter);
app.use("/petManager", rescueTask);
app.use("/petManager", rescueRequest);

//import inventory routes
const itemRouter = require('./routes/product.route');
const supplierRouter =  require('./routes/supplier.routes');
const requestRouter = require('./routes/request.route');
const orderRouter = require('./routes/order.route');

app.use("/inventoryManager",itemRouter);
app.use("/inventoryManager",supplierRouter);
app.use("/inventoryManager",requestRouter);
app.use("/inventoryManager",orderRouter);
app.use("/suppliers", orderRouter);


app.use("/adoptionManager", adoptionRouter);
app.use("/adoptionManager", supplyRouter);
app.use("/adoptionManager", appoinmentRouter)
app.use("/adoptionManager", adoptionProcessRouter)

app.use("/doctor", doctorRouter)


app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});


