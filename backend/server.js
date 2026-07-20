import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

app.use('/students',studentRoutes)

app.listen(5000,()=>{
    console.log("The server is running on port 5000");
})


