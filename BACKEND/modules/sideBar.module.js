const mongoose = require('mongoose');

const SideBarSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
});

const SideBar = mongoose.model("SideBar", SideBarSchema);

module.exports = SideBar;