const router = require('express').Router();
let Complaint = require('../modules/complaint');

// create a complaint
app.post('/addcomplaint', (req, res) => {
    
    const {userName,contact,location,image,date} = req.body;
    const newComplaint = new Complaint({
        val
    })

    newComplaint.save().then(() => {
        res.json("Complaint is send");
    }).catch((err)=> {
        console.log(err);
    })

});


module.exports = router;