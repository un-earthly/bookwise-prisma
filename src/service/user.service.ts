import { IUser } from "../interface/user.interface";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const UserService = {

    createUser: async (data: IUser) => {
        const newUser = await prisma.user.create({
            data
        });
        return newUser;
    },

    deleteUser: async (id: string) => {
        const deletedUser = await prisma.user.delete({
            where: { id }
        })
        return deletedUser;
    },

    getAllUsers: async () => {
        const users = await prisma.user.findMany();
        return users;
    },

    getSingleUser: async (id: string) => {
        const user = await prisma.user.findUnique({
            where: { id }
        });
        return user;
    },

    updateUser: async (id: string, data: Partial<IUser>) => {
        const updatedUser = await prisma.user.update({
            where: { id },
            data
        });
        return updatedUser;
    },
}