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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.updateCategory = exports.getSingleCategory = exports.getAllCategories = exports.createCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createCategory = (title) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma.category.create({
        data: {
            title,
        },
    });
    return category;
});
exports.createCategory = createCategory;
// Get all categories
const getAllCategories = () => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield prisma.category.findMany();
    return categories;
});
exports.getAllCategories = getAllCategories;
// Get a single category by ID
const getSingleCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield prisma.category.findUnique({
        where: {
            id,
        },
    });
    return category;
});
exports.getSingleCategory = getSingleCategory;
// Update a category by ID
const updateCategory = (id, name) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedCategory = yield prisma.category.update({
        where: {
            id,
        },
        data: {
            title: name,
        },
    });
    return updatedCategory;
});
exports.updateCategory = updateCategory;
// Delete a category by ID
const deleteCategory = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedCategory = yield prisma.category.delete({
        where: {
            id,
        },
    });
    return deletedCategory;
});
exports.deleteCategory = deleteCategory;
