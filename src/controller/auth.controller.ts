import { type Request, type Response } from 'express'
import { AuthService } from '../service/auth.services'
import catchAsync from '../utils/catchAsync'
import { sendResponse } from '../utils/responseUtils'
import { generateAccessToken } from '../utils/token'
import bcrypt from 'bcrypt'
const authController = {
  signup: catchAsync(async (req: Request, res: Response) => {
    // const data = {
    //     ...req.body,
    //     profileImg: req.file.filename
    // }
    const { password, ...userData } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await AuthService.createUser({ ...userData, password: hashedPassword })
    const token = generateAccessToken({ id: user.id, role: user.role, email: user.email })
    sendResponse(res, 200, user, 'user created successfully', token)
  }),
  login: catchAsync(async (req: Request, res: Response) => {
    const { email, password } = req.body

    const user = await AuthService.loginUser(email, password)

    if (user === null) {
      sendResponse(res, 401, { message: 'Invalid credentials' })
      return
    }

    const token = generateAccessToken({ id: user.id, role: user.role, email: user.email })

    sendResponse(res, 200, user, 'user logged in successfully', token)
  })
}

export default authController
