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
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const responseUtils_1 = require("../utils/responseUtils");
const order_service_1 = __importDefault(require("../service/order.service"));
const categoryController = {
    createOrder: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const order = yield order_service_1.default.createOrder(req.user.id, req.body.orderedBooks);
        (0, responseUtils_1.sendResponse)(res, 200, order);
    })),
    getAllOrders: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const orders = yield order_service_1.default.getAllOrders();
        (0, responseUtils_1.sendResponse)(res, 200, orders);
    })),
    getSingleOrder: (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const orderId = req.params.orderId;
        const order = yield order_service_1.default.getSingleOrder(orderId);
        if (!order) {
            (0, responseUtils_1.sendResponse)(res, 404, "Order not found");
        }
        else {
            (0, responseUtils_1.sendResponse)(res, 200, order);
        }
    })),
};
exports.default = categoryController;
