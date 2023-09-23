import { IUser } from "../interface/user.interface";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const UserService = {

    createUser: async (data: IUser) => {
        const newUser = await prisma.user.create({
            data,
        });
        return newUser;
    },
    
}