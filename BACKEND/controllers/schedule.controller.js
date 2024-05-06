const Schedule = require('../modules/schedule.model');


const getSchedules = async (req, res) => {

    try {
        const schedules = await Schedule.find({});
        res.status(200).json(schedules);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        const schedule = await Schedule.findById(id);
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createSchedule = async (req, res) => {
    try {

        const schedule = await Schedule.create(req.body);
        res.status(200).json(schedule);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateSchedule = async (req, res) => {

    try {

        const { id } = req.params;

        const schedule = await Schedule.findByIdAndUpdate(id, req.body);

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" })
        }
        const updatedSchedule = await Schedule.findById(id);
        res.status(200).json(updatedSchedule);

    } catch (error) {

        res.status(500).json({ message: error.message });
    }
};


const deleteSchedule = async (req, res) => {
    try {
        const { id } = req.params;

        const schedule = await Schedule.findByIdAndDelete(id);

        if (!schedule) {
            return res.status(404).json({ message: "Schedule not found" });
        }

        res.status(200).json({ message: "Schedule deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });

    }};

    //get card details of one user by user id
    const getAssignDetails = async (req, res) => {
    try {
      const { driver } = req.params;
  
      const schedule = await Schedule.find({ Driver: driver });
  
      console.log(schedule);
      if (!schedule) {
        return res.status(404).json({ message: "Driver not found" });
      }
  
      // Send card data to the frontend only if database has data related to the provided user_id
      if (schedule) {
        res.status(200).json(schedule);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = { 
    getSchedules,
    getSchedule,
    createSchedule,
    updateSchedule,
    deleteSchedule,
    getAssignDetails
};


    