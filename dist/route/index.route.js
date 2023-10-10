"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_route_1 = __importDefault(require("./book.route"));
const category_route_1 = __importDefault(require("./category.route"));
const order_route_1 = __importDefault(require("./order.route"));
const user_route_1 = __importDefault(require("./user.route"));
const auth_route_1 = __importDefault(require("./auth.route"));
const router = require("express").Router();
const routes = [
    {
        path: "/auth",
        children: auth_route_1.default
    },
    {
        path: "/users",
        children: user_route_1.default
    },
    {
        path: "/categories",
        children: category_route_1.default
    },
    {
        path: "/books",
        children: book_route_1.default
    },
    {
        path: "/orders",
        children: order_route_1.default
    }
];
routes.forEach(r => router.use(r.path, r.children));
exports.default = router;
