import { Request, Response } from "express";
import * as CategoryService from "../service/category.service";
import { sendResponse } from "../utils/responseUtils";
import catchAsync from "../utils/catchAsync";

const categoryController = {
    createCategory: catchAsync(async (req: Request, res: Response) => {
        const { title } = req.body;
        const newCategory = await CategoryService.createCategory(title);
        console.log(newCategory)
        sendResponse(res, 201, newCategory, "Category created successfully");
    }),

    getAllCategories: catchAsync(async (req: Request, res: Response) => {
        const categories = await CategoryService.getAllCategories();
        sendResponse(res, 200, categories);
    }),

    getSingleCategory: catchAsync(async (req: Request, res: Response) => {
        const { id } = req.params;
        const category = await CategoryService.getSingleCategory(id);

        if (!category) {
            sendResponse(res, 404, null, "Category not found");
        } else {
            sendResponse(res, 200, category);
        }
    }),

    updateCategory: catchAsync(async (req: Request, res: Response) => {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await CategoryService.updateCategory(id, name);

        if (!updatedCategory) {
            sendResponse(res, 404, null, "Category not found");
        } else {
            sendResponse(res, 200, updatedCategory, "Category updated successfully");
        }
    }),

    deleteCategory: catchAsync(async (req: Request, res: Response) => {
        const { id } = req.params;
        const deletedCategory = await CategoryService.deleteCategory(id);

        if (!deletedCategory) {
            sendResponse(res, 404, null, "Category not found");
        } else {
            sendResponse(res, 204, null, "Category deleted successfully");
        }
    })
};

export default categoryController;
