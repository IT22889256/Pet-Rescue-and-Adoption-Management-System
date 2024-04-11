const mongoose = require('mongoose');

const CommonSchema = mongoose.Schema({
    Common_status: {
        type: String,
        required: true
    }
});

const Common = mongoose.model("Common", CommonSchema);

module.exports = Common;