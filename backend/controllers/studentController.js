import Student from "../models/student.js";

export const register= async(req,res) => {
    // res.send("Registered Successfully");

    console.log(req.body)
    const student = await Student.create(req.body);
    // res.send(student)

    res.status(200).json({
        success:true,
        message:"Student registered Successfully",
        student:student
    })
}

export const login = (req,res) => {
    // res.send("Login Successfully")
    res.status(200).json({
        success:false,
        message:"Student not Registered Successfully",
        
    })
}

