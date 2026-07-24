import jwt from "jsonwebtoken"

export const verifyToken=(req,res,next) => {
    try{
        let token = req.headers.authorization
    

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token not provided"
            })
        }
        let authtoken=token.split(' ')[1] //return only string after "Beaer" 

        const decodeToken=jwt.verify(authtoken,"this is  SECRET KEY")

        req.user = decodeToken;
        

        next();
        // console.log(decodToken)

    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}