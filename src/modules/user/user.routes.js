import express from 'express';
import { sighUp } from './user.controller.js';


const userRouter=express.Router();

userRouter.post('/signUp',sighUp);


export default userRouter

