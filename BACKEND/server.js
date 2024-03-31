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
//const complaintRouter = require('./routes/complaint.route');
//const petRouter = require('./routes/pet.route')

//import routes
const itemRouter = require('./routes/product.route');

const supplierRouter =  require('./routes/supplier.routes');
//complaint
// app.use("/complain", complaintRouter);
// app.use("/petManager", petRouter);

app.use("/inventoryManager",itemRouter);
app.use("/inventoryManager",supplierRouter);


app.listen(PORT, () =>{
    console.log(`Server is up and running on ${PORT}`);
});