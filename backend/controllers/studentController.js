import Student from "../models/student.js";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'




export const register = async (req, res) => {
    // res.send("Registered Successfully");

    // console.log(req.body)
    try {
        const { name, email, password, courses, skills, role } = req.body // destructuring the data from req.body
        if (!name) {
            return res.status(400).json({
                message: "Naam do"
            })
        }
        if (!email) {
            return res.status(400).json({
                message: "email do"
            })
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Please enter a valid email"
            })
        }
        // now checking mail whether it is present in databse or not

        const existEmail = await Student.findOne({ email: email }) //findOne() return an object if email found else return NULL
        console.log(existEmail)

        if (existEmail) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }
        if (!password) {
            return res.status(400).json({
                message: "Password Dena Bhool Gaye"
            })
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);

        if (!passwordRegex.test(password)) {
            return res.status(400).json({
                message: "Please enter a valid password"
            })
        }
        if (!courses) {
            return res.status(400).json({
                message: "Please enter courses"
            })
        }
        if (!skills) {
            return res.status(400).json({
                message: "Please enter skills"
            })
        }
        if (!role) {
            role = "student"
        }


        const student = await Student.create({ name, email, password: hashedPassword, courses, skills, role }); //create() is a method of mongoose --> used to create a new document in the collection
        // res.send(student)

        res.status(200).json({
            success: true,
            message: "Student registered Successfully",
            student: student
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async (req, res) => {
    // res.send("Login Successfully")

    try {
        const { email, password } = req.body
        if (!email) {
            return res.status(400).json({
                message: "Please Provide email"
            })
        }
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Enter valid email"
            })
        }

        const existEmail = await Student.findOne({ email: email })
        if (!existEmail) {
            return res.status(400).json({
                message: "User is not registered"
            })
        }
        let comparepassword = await bcrypt.compare(password, existEmail.password)
        if (!comparepassword) {
            return res.status(400).json({
                message: "Please enter valid password"
            })
        }

        let token = jwt.sign({ email: email, existUser: existEmail._id }, "this is  SECRET KEY", { expiresIn: "2D" }) //jwt.sign() --> used to create a new token --> first parameter is the payload --> second parameter is the secret key --> third parameter is the options --> expiresIn is the time for which the token will be valid

        return res.status(200).json({
            succes: true,
            message: "Token genereated Successfully",
            token: token
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

export const getAllUsers = async (req, res) => {
    try {
        let students = await Student.find(); //find() return an array of obect

        //if no user found
        if (students.length == 0) {
            return res.status(404).json({
                message: "No user found"
            })
        }

        console.log(`No. of registered students ${students.length}`);

        return res.status(200).json({
            success: true,
            message: "Recieved all students successfully",
            students: students
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateUser = async (req, res) => {
    try {
        // console.log(req.params)
        const { id } = req.params //req.params is used to get the parameters from the URL
        const students = await Student.findByIdAndUpdate(id, req.body, { new: true }) //findByIdAndUpdate() --> used to update the document in the collection --> first parameter is the id --> second parameter is the data to be updated --> third parameter is the options --> new: true means return the updated document

        console.log(students)
        if (!students) {
            return res.status(404).json({
                success: false,
                message: "No User found",

            })

        }
        return res.status(200).json({
            succes: true,
            message: "Updated Successfully",
            student: students
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const deleteUser = async (req, res) => {
    try {
        console.log(req.user)
        const { id } = req.params
        const validId = await Student.findById(id);
        if(!validId){
            return res.status(404).json({
                success:false,
                message:"No User found with this id"
            })
        }
        const students = await Student.findByIdAndDelete(id);
        if (!students) {
            return res.status(404).json({
                success: false,
                message: "No User found"
            })
        }
        return res.status(201).json({
            success: true,
            message: "Student Deleted Successfully"
        })



    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


export const findUserById = async (req, res) => {
    try {
        const { id } = req.params
        const students = await Student.findById(id)

        if (!students) {
            return res.status(400).json({
                success: false,
                message: "No User found with this id"
            })
        }

        return res.status(200).json({
            success: true,
            message: "User Found Successfully",
            student: students
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}