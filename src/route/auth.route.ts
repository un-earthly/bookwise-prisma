import express from "express";
const authRouter = express.Router();
import authController from '../controller/auth.controller';


authRouter.post('/signup', authController.signup);
authRouter.post('/signin', authController.login);

export default authRouter;