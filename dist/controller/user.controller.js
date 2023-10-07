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
const user_service_1 = require("../service/user.service");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const responseUtils_1 = require("../utils/responseUtils");
const UserController = {
    getAllUsers: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield user_service_1.UserService.getAllUsers();
        (0, responseUtils_1.sendResponse)(res, 200, { users });
    })),
    getSingleUser: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_service_1.UserService.getSingleUser(req.params.id);
        (0, responseUtils_1.sendResponse)(res, 200, { user });
    })),
    updateUser: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUser = yield user_service_1.UserService.updateUser(req.params.id, req.body);
        (0, responseUtils_1.sendResponse)(res, 200, { updatedUser });
    })),
    deleteUser: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield user_service_1.UserService.deleteUser(req.params.id);
        (0, responseUtils_1.sendResponse)(res, 200, { user });
    })),
};
exports.default = UserController;