import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { sendResponse } from "../utils/responseUtils";
import { BookService } from "../service/book.service";

const BookController = {
    createBook: catchAsync(async (req: Request, res: Response) => {
        const book = await BookService.createBook(req.body);
        sendResponse(res, 200, book)
    }),
    getAllBooks: catchAsync(async (req: Request, res: Response) => {
        const books = await BookService.getAllBooks();
        sendResponse(res, 200, books)
    }),
    getSingleBook: catchAsync(async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const book = await BookService.getSingleBook(bookId);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        sendResponse(res, 200, book)
    }),
    getBooksByCategory: catchAsync(async (req: Request, res: Response) => {
        const categoryId = req.params.categoryId;
        const books = await BookService.getBooksByCategory(categoryId);
        sendResponse(res, 200, books)
    }),
    updateBook: catchAsync(async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const updatedBook = await BookService.updateBook(bookId,req.body);
        if (!updatedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        sendResponse(res, 200, updatedBook)
    }),
    deleteBook: catchAsync(async (req: Request, res: Response) => {
        const bookId = req.params.id;
        const deletedBook = await BookService.deleteBook(bookId);
        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found' });
        }
        sendResponse(res, 200, deletedBook)
    }),
}

export default BookController;