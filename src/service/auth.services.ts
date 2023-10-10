import { PrismaClient } from '@prisma/client'
import { type IUser } from '../interface/user.interface'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const AuthService = {
  createUser: async (data: IUser) => {
    const newUser = await prisma.user.create({
      data
    })
    return newUser
  },
  loginUser: async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    if (user === null) {
      return null
    }

    const passwordsMatch = comparePasswords(password, user.password)

    if (!passwordsMatch) {
      return null
    }

    return user
  }

}
function comparePasswords (inputPassword: string, hashedPassword: string): boolean {
  const isMatch = bcrypt.compareSync(inputPassword, hashedPassword)
  return isMatch
}
