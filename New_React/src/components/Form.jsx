import React from "react";
import { useState } from "react";
export default function form(){
    const [name, setName] = useState("")
    console.log(name)
    const [email, setEmail] = useState("")
    console.log(email)
    const [password, setPassword] = useState("")
    return(
        <>
        <h1>This is a Form</h1>
        <label>Name</label>
        <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
        <br />
        <label>Email</label>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <br />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button type="submit">Submit</button>
        </>
    )
}