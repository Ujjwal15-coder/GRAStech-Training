import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
import { connectDB } from './config/db.js'

import dotenv from 'dotenv'
dotenv.config()

const app = express();
connectDB();

app.use(express.json())

const PORT = process.env.PORT || 5000;

app.use('/students',studentRoutes) //application level middleware

app.get('/',(req,res) => {
    res.send("Hello World")
})
app.get('/about',(req,res)=> {
    res.send("About Page")
})

app.listen(PORT,()=>{
    console.log("The server is running on port 5000");
})


