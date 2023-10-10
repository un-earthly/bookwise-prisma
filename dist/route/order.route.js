"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const order_controller_1 = __importDefault(require("../controller/order.controller"));
const token_1 = require("../utils/token");
const customerRoute_1 = require("../middleware/customerRoute");
const adminRoute_1 = require("../middleware/adminRoute");
const orderRouter = express_1.default.Router();
orderRouter.post('/create-order', token_1.verifyJWT, customerRoute_1.customerRoute, order_controller_1.default.createOrder);
orderRouter.get('/', token_1.verifyJWT, adminRoute_1.adminRoute, order_controller_1.default.getAllOrders);
orderRouter.get('/:orderId', token_1.verifyJWT, order_controller_1.default.getSingleOrder);
exports.default = orderRouter;
