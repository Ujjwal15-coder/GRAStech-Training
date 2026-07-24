import express from 'express';
import {register,login, getAllUsers,updateUser,deleteUser, findUserById} from '../controllers/studentController.js'
import { verifyToken } from '../middleware/auth.js';
import { isAdmin } from '../middleware/isAdmin.js';

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

router.get('/getallusers',getAllUsers)
router.put('/updateuser/:id',updateUser)
router.delete('/deleteuser/:id',verifyToken,deleteUser)
router.get('/finduserbyid/:id',findUserById)

export default router

