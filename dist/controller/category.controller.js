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
const category_service_1 = require("../service/category.service");
const responseUtils_1 = require("../utils/responseUtils");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const CategoryController = {
    createCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { title } = req.body;
        const newCategory = yield category_service_1.CategoryService.createCategory(title);
        console.log(newCategory);
        (0, responseUtils_1.sendResponse)(res, 201, newCategory, 'Category created successfully');
    })),
    getAllCategories: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield category_service_1.CategoryService.getAllCategories();
        (0, responseUtils_1.sendResponse)(res, 200, categories);
    })),
    getSingleCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const category = yield category_service_1.CategoryService.getSingleCategory(id);
        if (category === null) {
            (0, responseUtils_1.sendResponse)(res, 404, null, 'Category not found');
        }
        else {
            (0, responseUtils_1.sendResponse)(res, 200, category);
        }
    })),
    updateCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = yield category_service_1.CategoryService.updateCategory(id, name);
        if (updatedCategory === null) {
            (0, responseUtils_1.sendResponse)(res, 404, null, 'Category not found');
        }
        else {
            (0, responseUtils_1.sendResponse)(res, 200, updatedCategory, 'Category updated successfully');
        }
    })),
    deleteCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const deletedCategory = yield category_service_1.CategoryService.deleteCategory(id);
        if (deletedCategory === null) {
            (0, responseUtils_1.sendResponse)(res, 404, null, 'Category not found');
        }
        else {
            (0, responseUtils_1.sendResponse)(res, 204, null, 'Category deleted successfully');
        }
    }))
};
exports.default = CategoryController;
