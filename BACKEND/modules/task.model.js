const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    rescue_req_id: {
        type: String,
        required: true
    },
    rescue_task_id: {
        type: String,
        unique:true
    },
    user_id:{
        type: String,
        required: true
    },
    pet_type:{
        type: String,
        required: true
    },
    rescue_task_priority:{
        type: String,
        required: true
    },
    health_status:{
        type: String,
        required: true
    },
    rescue_task_status:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    pet_profile_status:{
        type: Boolean,
        required: true
    },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;