/**
 * fields: 
 * userId
    date
    reason
    status
 */

const appointmentnsController = {}

import appointmentsModel from "../models/appointments.js"

//SELECT BY ID
appointmentnsController.getById = async (req, res) => {
    try {
        const appointment = await appointmentsModel.findById(req.params.id).populate("userId", "name email")
        if (!appointment) {
            return res.status(404).json({message: "Appointment not found"})
        }
        return res.status(200).json(appointment)
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//GET
appointmentnsController.get = async(req, res) => {
    try {
        const appointments = await appointmentnsController.find().populate("userId", "")

        return res.status(200).json(appointments);
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//CREATE
appointmentnsController.create = async(req, res) => {
    try {
        const {userId, date, reason, status} = req.body;
        const newAppointment = new appointmentsModel({userId, date, reason, status});

        await newAppointment.save();

        return res.status(200).json({message: "Created"})
    } catch (error) {
        console.error("error" + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//UPDATE 
appointmentnsController.update = async(req, res) => {
    try {
        const {userId, date, reason, status} = req.body;
        const updated = await appointmentsModel.findByIdAndUpdate(req.params.id, {userId, date, reason, status}, {new: true})

        if(!updated){
            return res.status(404).json({message: "Appointment not found"})
        }

        return res.status(200).json({message: "Updated"})
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//DELETE 
appointmentnsController.delete = async(req, res)=> {
    try {
        const deleted = await appointmentsModel.findByIdAndDelete(req.params.id)
        if(!deleted){
            return res.status(404).json({message: "Appointment not found"})
        }
        return res.status(200).json({message: "Deleted"})
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export default appointmentnsController;
