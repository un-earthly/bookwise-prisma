"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
const auth_controller_1 = __importDefault(require("../controller/auth.controller"));
authRouter.post('/signup', auth_controller_1.default.signup);
authRouter.post('/signin', auth_controller_1.default.login);
exports.default = authRouter;
