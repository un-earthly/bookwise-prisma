"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_controller_1 = __importDefault(require("../controller/book.controller"));
const bookRouter = express_1.default.Router();
bookRouter.post('/create-book', book_controller_1.default.createBook);
bookRouter.get('/', book_controller_1.default.getAllBooks);
bookRouter.get('/:id', book_controller_1.default.getSingleBook);
bookRouter.get('/:categoryId/category', book_controller_1.default.getBooksByCategory);
bookRouter.patch('/:id', book_controller_1.default.updateBook);
bookRouter.delete('/:id', book_controller_1.default.deleteBook);
exports.default = bookRouter;
