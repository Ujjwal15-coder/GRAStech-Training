import Student from "../models/student.js";

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const passwordRegex = /^[A-Za-z\d@$!%*?&]{8,}$/;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'




export const register= async(req,res) => {
    // res.send("Registered Successfully");

    // console.log(req.body)
    

    const {name,email,password,courses,skills} = req.body
    if(!name){
        return res.status(400).json({
            message:"Naam do"
        })
    }
    if(!email){
        return res.status(400).json({
            message:"email do"
        })
    }
    if(!emailRegex.test(email)){
        return res.status(400).json({
            message:"Please enter a valid email"
        })
    }
   // now checking mail wheteher it is present in databse or not

   const existEmail = await Student.findOne({email:email})
   console.log(existEmail)

   if(existEmail){
    return res.status(400).json({
        message:"Email already exists"
    })
   }
   if(!password){
    return res.status(400).json({
        message:"Password Dena Bhool Gaye"
    })
   }


   const hashedPassword = await bcrypt.hash(password,10);
   console.log(hashedPassword);

if(!passwordRegex.test(password)){
    return res.status(400).json({
        message:"Please enter a valid password"
    })
}



    const student = await Student.create(req.body);
    // res.send(student)

    res.status(200).json({
        success:true,
        message:"Student registered Successfully",
        student:student
    })
}

export const login = async (req,res) => {
    // res.send("Login Successfully")

    try{
        const {email,password} = req.body
        if(!email){
            return res.status(400).json({
                message:"Please Provide email"
            })
        }
        if(!emailRegex.test(email)){
            return res.status(400).json({
                message:"Enter valid email"
            })
        }

        const existEmail = await Student.findOne({email:email})
        if(!existEmail){
            return res.status(400).json({
                message:"User is not registered"
            })
        }
        let comparepassword = await bcrypt.compare(password,existEmail.password)
        if(!comparepassword){
            return res.status(400).json({
                message:"Please enter valid password"
            })
        }

        let token = jwt.sign({email:email,existUser,_id},"this is  SECRET KEY",{expiresIn:"2D"})

        return res.status(200).json({
            succes:true,
            message:"Token genereated Successfully",
            token:token
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}

