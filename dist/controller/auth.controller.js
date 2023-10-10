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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_services_1 = require("../service/auth.services");
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const responseUtils_1 = require("../utils/responseUtils");
const token_1 = require("../utils/token");
const bcrypt_1 = __importDefault(require("bcrypt"));
const authController = {
    signup: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        // const data = {
        //     ...req.body,
        //     profileImg: req.file.filename
        // }
        const _a = req.body, { password } = _a, userData = __rest(_a, ["password"]);
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield auth_services_1.AuthService.createUser(Object.assign(Object.assign({}, userData), { password: hashedPassword }));
        const token = (0, token_1.generateAccessToken)({ id: user.id, role: user.role, email: user.email });
        (0, responseUtils_1.sendResponse)(res, 200, user, 'user created successfully', token);
    })),
    login: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { email, password } = req.body;
        const user = yield auth_services_1.AuthService.loginUser(email, password);
        if (user === null) {
            (0, responseUtils_1.sendResponse)(res, 401, { message: 'Invalid credentials' });
            return;
        }
        const token = (0, token_1.generateAccessToken)({ id: user.id, role: user.role, email: user.email });
        (0, responseUtils_1.sendResponse)(res, 200, user, 'user logged in successfully', token);
    }))
};
exports.default = authController;
