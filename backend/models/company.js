import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },

    salaryPackage: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description:{
        type:String,
    }


}, { timestamps: true })

export default mongoose.model('company', companySchema)
