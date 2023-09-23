import { Request, Response } from "express";
import * as bookService from "../service/book.service";
import { sendResponse } from "../utils/responseUtils";

const categoryController = {
    createCategory: (req: Request, res: Response) => {
        const { name } = req.body;
        const newCategory = bookService.createCategory(name);
        sendResponse(res, 201, newCategory, "Category created successfully");
    },

    getAllCategories: (req: Request, res: Response) => {
        const categories = bookService.getAllCategories();
        sendResponse(res, 200, categories);
    },

    getSingleCategory: (req: Request, res: Response) => {
        const { id } = req.params;
        const category = bookService.getSingleCategory(parseInt(id, 10));

        if (!category) {
            sendResponse(res, 404, null, "Category not found");
        } else {
            sendResponse(res, 200, category);
        }
    },

    updateCategory: (req: Request, res: Response) => {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = bookService.updateCategory(parseInt(id, 10), name);

        if (!updatedCategory) {
            sendResponse(res, 404, null, "Category not found");
        } else {
            sendResponse(res, 200, updatedCategory, "Category updated successfully");
        }
    },

    deleteCategory: (req: Request, res: Response) => {
        const { id } = req.params;
        const deletedCategory = bookService.deleteCategory(parseInt(id, 10));

        if (!deletedCategory) {
            sendResponse(res, 404, null, "Category not found");
        } else {
            sendResponse(res, 204, null, "Category deleted successfully");
        }
    },
};

export default categoryController;
