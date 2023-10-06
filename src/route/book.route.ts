import express from 'express';
import BookController from '../controller/book.controller';
const bookRouter = express.Router();

bookRouter.post('/create-book', BookController.createBook);
bookRouter.get('/', BookController.getAllBooks);
bookRouter.get('/:id', BookController.getSingleBook);
bookRouter.get('/:categoryId/category', BookController.getBooksByCategory);
bookRouter.patch('/:id', BookController.updateBook);
bookRouter.delete('/:id', BookController.deleteBook);

export default bookRouter;