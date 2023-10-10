"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_controller_1 = __importDefault(require("../controller/category.controller"));
const CategoryRouter = express_1.default.Router();
CategoryRouter.post('/create-category', category_controller_1.default.createCategory);
CategoryRouter.get('/', category_controller_1.default.getAllCategories);
CategoryRouter.get('/:id', category_controller_1.default.getSingleCategory);
CategoryRouter.patch('/:id', category_controller_1.default.updateCategory);
CategoryRouter.delete('/:id', category_controller_1.default.deleteCategory);
exports.default = CategoryRouter;
