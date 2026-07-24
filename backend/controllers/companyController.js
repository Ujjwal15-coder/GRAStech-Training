import company from "../models/company.js";

export const addCompany = async (req, res) => {
    try {
        const { companyName, salaryPackage, role, location,description } = req.body // destructuring the data from req.body
        if(!companyName){
            return res.status(400).json({
                success:false,
                message:"Please provide company name"
            })
        }

        if(!salaryPackage){
            return res.status(400).json({
                success:false,
                message:"Please provide salary package"
            })
        }

        if(!role){
            return res.status(400).json({
                success:false,
                message:"Please provide role"
            })
        }

        if(!location){
            return res.status(400).json({
                success:false,
                message:"Please provide location"
            })
        }
        if(!description){
            return res.status(400).json({
                success:false,
                message:"Please provide description"
            })
        }

        const newCompany = await company.create({
            companyName,
            salaryPackage,
            role,
            location,
            description
        })
return res.status(201).json({
    success:true,
    message:"Company added successfully",
    company:newCompany
})
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getAllCompanies = async(req,res)=>{
    try {
        const companies = await company.find();
        if(companies.length==0){
            return res.status(404).json({
                success:false,
                message:"No companies found",
                Number_of_companies:companies.length
            })
        }
        return res.status(200).json({
            success:true,
            message:"Companies fetched successfully",
            companies:companies
        })
       
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const getCompanyById = async(req,res) => {
    try{
        const {id} = req.params
        const company = await company.findById(id)
        if(!company){
            return res.status(404).json({
                success:false,
                message:"No company found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Company fetched successfully",
            company:company
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export const updateCompany = async(req,res) => {
    try{
        const {id} = req.params
        const company = await company.findByIdAndUpdate(id,req.body,{new:true})
        if(!company){
            return res.status(404).json({
                success:false,
                message:"No company found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Company updated successfully",
            company:company
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

export const deleteCompany = async(req,res) => {
    try{
        const {id} = req.params
        const company = await company.findByIdAndDelete(id)
        if(!company){
            return res.status(404).json({
                success:false,
                message:"No company found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Company deleted successfully",
            company:company
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }
}