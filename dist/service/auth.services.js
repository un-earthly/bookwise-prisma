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
exports.AuthService = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
exports.AuthService = {
    createUser: (data) => __awaiter(void 0, void 0, void 0, function* () {
        const newUser = yield prisma.user.create({
            data
        });
        return newUser;
    }),
    loginUser: (email, password) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return null;
        }
        const passwordsMatch = comparePasswords(password, user.password);
        if (!passwordsMatch) {
            return null;
        }
        return user;
    }),
};
function comparePasswords(inputPassword, hashedPassword) {
    const isMatch = bcrypt_1.default.compareSync(inputPassword, hashedPassword);
    return isMatch;
}
