import { useState } from "react";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Form(){

    const [error,setError] = useState({
        name : "",
        email : "",
        password : "",
        mobile : ""
    })

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",
        mobile : ""
    })

    const handleChange = (e)=>{
        const {name,value} = e.target
        setFormData(prevState => ({
            ...prevState,
            [name] : value
        }))
        setError(prevState => ({
            ...prevState,
            [name] : ""
        }))
    }

    const validateForm = () =>{
        let errors = {}

        if(formData.name.trim() === ""){
            errors.name = "Name is required"
        }

        if(formData.email.trim() === ""){
            errors.email = "Email is required"
        }
        else if(!emailRegex.test(formData.email)){
            errors.email = "Email is invalid"
        }

        if(formData.password.trim() === ""){
            errors.password = "Password is required"
        }else if(formData.password.length < 8){
            errors.password = "Password must be at least 8 characters long"
        }

        if(formData.mobile.trim() === ""){
            errors.mobile = "Mobile is required"
        }else if(formData.mobile.length !== 10){
            errors.mobile = "Mobile must be 10 digits long"
            
        }

        return errors
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const errors = validateForm()
        setError(errors)

        // Clear the values of fields with errors so placeholders show up
        const clearedFormData = { ...formData };
        if (errors.name) clearedFormData.name = "";
        if (errors.email) clearedFormData.email = "";
        if (errors.password) clearedFormData.password = "";
        if (errors.mobile) clearedFormData.mobile = "";
        setFormData(clearedFormData);

        if(Object.keys(errors).length === 0){
            alert("Form submitted successfully")
        }
        else if(Object.keys(errors).length > 0){
            alert("Form not submitted successfully")
        }
    }
    
    console.log("Error : ",error)
    console.log("Form Data : ",formData)



    return(
        <div>
            <h1>Registration Form</h1>
        
            <form onSubmit={handleSubmit} className='row g-3 justify-content-center m-5'>
                <div className="mt-2">
                    <label htmlFor="inputName4" className="form-label">Name</label>
                    <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-control ${error.name ? 'is-invalid' : ''}`} 
                        id="inputName4" 
                        placeholder={error.name || 'Enter your name '}
                    />
                    <div className="invalid-feedback">
                        {error.name}
                    </div>
                </div>
                <div className="mt-2">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${error.email ? 'is-invalid' : ''}`} 
                        id="inputEmail4" 
                        placeholder={error.email || 'Enter your e-mail '}
                    />
                    <div className="invalid-feedback">
                        {error.email} 
                    </div>
                </div>
                <div className="mt-2">
                    <label htmlFor="inputAddress" className="form-label">Password</label>
                    <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className={`form-control ${error.password ? 'is-invalid' : ''}`} 
                        id="inputAddress" 
                        placeholder={error.password || 'Enter your password '}
                    />
                    <div className="invalid-feedback">
                        {error.password}
                    </div>
                </div>
                <div className="mt-2">
                    <label htmlFor="inputAddress2" className="form-label">Mobile</label>
                    <input 
                        type="text" 
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={`form-control ${error.mobile ? 'is-invalid' : ''}`} 
                        id="inputAddress2" 
                        placeholder={error.mobile || 'Enter your mobile number '}
                    />
                    <div className="invalid-feedback">
                        {error.mobile}
                    </div>
                </div>
                <div className="mt-2">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
            
        </div>
    )
}
