"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controller/user.controller"));
const adminRoute_1 = require("../middleware/adminRoute");
const token_1 = require("../utils/token");
const userRouter = express_1.default.Router();
userRouter.get('/', token_1.verifyJWT, adminRoute_1.adminRoute, user_controller_1.default.getAllUsers);
userRouter.get('/:id', token_1.verifyJWT, adminRoute_1.adminRoute, user_controller_1.default.getSingleUser);
userRouter.patch('/:id', token_1.verifyJWT, adminRoute_1.adminRoute, user_controller_1.default.updateUser);
userRouter.delete('/:id', token_1.verifyJWT, adminRoute_1.adminRoute, user_controller_1.default.deleteUser);
exports.default = userRouter;
