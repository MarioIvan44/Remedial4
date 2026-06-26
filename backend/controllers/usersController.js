/* Fields: 
name
email
password
phone
 isVerified
loginAttempts
timeOut*/

const usersController = {}

import usersModel from "../models/users.js"

//SELECT BY ID
usersController.getById = async (req, res) => {
    try {
        const user = await usersModel.findById(req.params.id)
        if (!user) {
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//GET
usersController.get = async(req, res) => {
    try {
        const users = await usersModel.find()

        return res.status(200).json(users);
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}


//UPDATE 
usersController.update = async(req, res) => {
    try {
        const {name, email, phone, isVerified, loginAttempts, timeOut} = req.body;
        const updated = await usersModel.findByIdAndUpdate(req.params.id, {name, email, phone, isVerified, loginAttempts, timeOut}, {new: true})

        if(!updated){
            return res.status(404).json({message: "User not found"})
        }

        return res.status(200).json({message: "Updated"})
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

//DELETE 
usersController.delete = async(req, res)=> {
    try {
        const deleted = await usersModel.findByIdAndDelete(req.params.id)
        if(!deleted){
            return res.status(404).json({message: "User not found"})
        }
        return res.status(200).json({message: "Deleted"})
    } catch (error) {
        console.error("error: " + error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export default usersController;
