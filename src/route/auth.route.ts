import express from 'express'
import authController from '../controller/auth.controller'
const authRouter = express.Router()

authRouter.post('/signup', authController.signup)
authRouter.post('/signin', authController.login)

export default authRouter
