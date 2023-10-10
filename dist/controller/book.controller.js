"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const responseUtils_1 = require("../utils/responseUtils");
const book_service_1 = require("../service/book.service");
const createErrorResponse = (res, statusCode, message) => {
    res.status(statusCode).json({ message });
};
const BookController = {
    createBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const book = yield book_service_1.BookService.createBook(req.body);
        (0, responseUtils_1.sendResponse)(res, 200, book);
    })),
    getAllBooks: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const books = yield book_service_1.BookService.getAllBooks();
        (0, responseUtils_1.sendResponse)(res, 200, books);
    })),
    getSingleBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const bookId = req.params.id;
        const book = yield book_service_1.BookService.getSingleBook(bookId);
        if (book === null || book === undefined) {
            createErrorResponse(res, 404, 'Book not found');
            return;
        }
        (0, responseUtils_1.sendResponse)(res, 200, book);
    })),
    getBooksByCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const categoryId = req.params.categoryId;
        const books = yield book_service_1.BookService.getBooksByCategory(categoryId);
        (0, responseUtils_1.sendResponse)(res, 200, books);
    })),
    updateBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const bookId = req.params.id;
        const updatedBook = yield book_service_1.BookService.updateBook(bookId, req.body);
        if (updatedBook === null || updatedBook === undefined) {
            createErrorResponse(res, 404, 'Book not found');
            return;
        }
        (0, responseUtils_1.sendResponse)(res, 200, updatedBook);
    })),
    deleteBook: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const bookId = req.params.id;
        const deletedBook = yield book_service_1.BookService.deleteBook(bookId);
        if (deletedBook === null || deletedBook === undefined) {
            createErrorResponse(res, 404, 'Book not found');
            return;
        }
        (0, responseUtils_1.sendResponse)(res, 200, deletedBook);
    }))
};
exports.default = BookController;
