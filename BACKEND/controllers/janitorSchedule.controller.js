const JanitorTask = require("../modules/janitorSchedule.model");
const Counter = require('../modules/counter.model');



const getJanitorSchedules = async (req, res) => {

    try {
        const schedules = await JanitorTask.find({});
        res.status(200).json(schedules);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getJanitorSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await JanitorTask.findById(id);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createJanitorSchedule = async (req, res) => {
    try {

        const counter = await Counter.findByIdAndUpdate(
            { _id: 'JanitorTaskScheduleId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
          );
        
          const JanitorTaskScheduleId = 'JTS' + String(counter.seq).padStart(3, '0');

        const schedule = await JanitorTask.create({ ...req.body, JanitorTaskScheduleId: JanitorTaskScheduleId });
        res.status(200).json(schedule);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateJanitorSchedule = async (req, res) => {

    try {

        const { id } = req.params;

        const schedule = await JanitorTask.findByIdAndUpdate(id, req.body);

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" })
        }
        const updatedSchedule = await JanitorTask.findById(id);
        res.status(200).json(updatedSchedule);

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};


const deleteJanitorSchedule = async (req, res) => {
    try {
        const { id } = req.params;

        const schedule = await JanitorTask.findByIdAndDelete(id);

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }

        res.status(200).json({ message: "Schedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }};

module.exports = { 
    getJanitorSchedules,
    getJanitorSchedule,
    createJanitorSchedule,
    updateJanitorSchedule,
    deleteJanitorSchedule
};


    