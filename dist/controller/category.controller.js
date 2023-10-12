"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const CategoryService = __importStar(require("../service/category.service"));
const responseUtils_1 = require("../utils/responseUtils");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const categoryController = {
    createCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { title } = req.body;
        const newCategory = yield CategoryService.createCategory(title);
        console.log(newCategory);
        (0, responseUtils_1.sendResponse)(res, 201, newCategory, "Category created successfully");
    })),
    getAllCategories: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const categories = yield CategoryService.getAllCategories();
        (0, responseUtils_1.sendResponse)(res, 200, categories);
    })),
    getSingleCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const category = yield CategoryService.getSingleCategory(id);
        if (!category) {
            (0, responseUtils_1.sendResponse)(res, 404, null, "Category not found");
        }
        else {
            (0, responseUtils_1.sendResponse)(res, 200, category);
        }
    })),
    updateCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = yield CategoryService.updateCategory(id, name);
        if (!updatedCategory) {
            (0, responseUtils_1.sendResponse)(res, 404, null, "Category not found");
        }
        else {
            (0, responseUtils_1.sendResponse)(res, 200, updatedCategory, "Category updated successfully");
        }
    })),
    deleteCategory: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { id } = req.params;
        const deletedCategory = yield CategoryService.deleteCategory(id);
        if (!deletedCategory) {
            (0, responseUtils_1.sendResponse)(res, 404, null, "Category not found");
        }
        else {
            (0, responseUtils_1.sendResponse)(res, 204, null, "Category deleted successfully");
        }
    }))
};
exports.default = categoryController;
