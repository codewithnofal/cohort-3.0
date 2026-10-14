import userModel from "../models/user.model.js";

export const registerController = async (req, res) => {
    const {name, email, password} = req.body;

    const isUserExist = userModel.findOne(email)

    if(isUserExist){
        return res.status(400).json({
            message: "email already in use"
        })
    }

    


    return res.status(201).json({
        message: "user created successfully"
    })
}