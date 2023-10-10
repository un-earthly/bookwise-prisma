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
exports.UserService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.UserService = {
    deleteUser: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const deletedUser = yield prisma.user.delete({
            where: { id }
        });
        return deletedUser;
    }),
    getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield prisma.user.findMany();
        return users;
    }),
    getSingleUser: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: { id }
        });
        return user;
    }),
    updateUser: (id, data) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = yield prisma.user.update({
            where: { id },
            data
        });
        return updatedUser;
    }),
};
