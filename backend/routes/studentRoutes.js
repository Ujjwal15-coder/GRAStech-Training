import express from 'express';
import {register,login} from '../controllers/studentController.js'

const router = express.Router()

router.get('/',(req,res)=> {
    res.send('This is router level middleware')
})

router.get('/all',(req,res)=> {
    res.send('All Students')
})
router.get('/teacher',(req,res) => {
    res.send("hii teacher")
})

router.post('/register',register)
router.post('/login',login)

export default router