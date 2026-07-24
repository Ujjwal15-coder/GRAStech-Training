import Student from "../models/student.js";

export const isAdmin = async(req,res,next) => { 
    try {
        const {email,id} = req.user
        const student = await Student.findById(id)
        console.log(student)

        if(!student){
            return res.status(403).json({
                success:false,
                message:"User not found"
            })
        }

        if(student.role !== "admin"){
            return res.status(401).json({
                success:false,
                message:"You are not authorized to access this resource"
            })
        }

    
        next()


    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
    
}

