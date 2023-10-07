"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderRouter = express_1.default.Router();
const order_controller_1 = __importDefault(require("../controller/order.controller"));
const token_1 = require("../utils/token");
orderRouter.post('/create-order', token_1.verifyJWT, order_controller_1.default.createOrder);
orderRouter.get('/', order_controller_1.default.getAllOrders);
orderRouter.get('/:orderId', order_controller_1.default.getSingleOrder);
exports.default = orderRouter;
