import { PrismaClient } from '@prisma/client';
import { IBook } from '../interface/book.interface';

const prisma = new PrismaClient();

export const BookService = {
    createBook: async (data: IBook) => {
        const book = await prisma.book.create({
            data
        });
        return book;
    },

    getAllBooks: async () => {
        const books = await prisma.book.findMany();
        return books;
    },

    getSingleBook: async (id: string) => {
        const book = await prisma.book.findUnique({
            where: {
                id,
            },
        });
        return book;
    },
    getBooksByCategory: async (categoryId: string) => {
        const books = await prisma.book.findMany({
            where: {
                categoryId,
            },
        });
        return books;
    },

    updateBook: async (id:string, data:IBook) => {
        const updatedBook = await prisma.book.update({
            where: {
                id,
            },
            data,
        });
        return updatedBook;
    },

    deleteBook: async (id: string) => {
        const deletedBook = await prisma.book.delete({
            where: {
                id,
            },
        });
        return deletedBook;
    },
};
