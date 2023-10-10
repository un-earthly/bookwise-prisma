import { type Request, type Response } from 'express'
import catchAsync from '../utils/catchAsync'
import { sendResponse } from '../utils/responseUtils'
import { BookService } from '../service/book.service'

const createErrorResponse = (res: Response, statusCode: number, message: string): void => {
  res.status(statusCode).json({ message })
}

const BookController = {
  createBook: catchAsync(async (req: Request, res: Response) => {
    const book = await BookService.createBook(req.body)
    sendResponse(res, 200, book)
  }),
  getAllBooks: catchAsync(async (req: Request, res: Response) => {
    const books = await BookService.getAllBooks()
    sendResponse(res, 200, books)
  }),
  getSingleBook: catchAsync(async (req: Request, res: Response) => {
    const bookId = req.params.id
    const book = await BookService.getSingleBook(bookId)

    if (book === null || book === undefined) {
      createErrorResponse(res, 404, 'Book not found'); return
    }

    sendResponse(res, 200, book)
  }),
  getBooksByCategory: catchAsync(async (req: Request, res: Response) => {
    const categoryId = req.params.categoryId
    const books = await BookService.getBooksByCategory(categoryId)
    sendResponse(res, 200, books)
  }),
  updateBook: catchAsync(async (req: Request, res: Response) => {
    const bookId = req.params.id
    const updatedBook = await BookService.updateBook(bookId, req.body)

    if (updatedBook === null || updatedBook === undefined) {
      createErrorResponse(res, 404, 'Book not found'); return
    }

    sendResponse(res, 200, updatedBook)
  }),
  deleteBook: catchAsync(async (req: Request, res: Response) => {
    const bookId = req.params.id
    const deletedBook = await BookService.deleteBook(bookId)

    if (deletedBook === null || deletedBook === undefined) {
      createErrorResponse(res, 404, 'Book not found'); return
    }

    sendResponse(res, 200, deletedBook)
  })
}

export default BookController
