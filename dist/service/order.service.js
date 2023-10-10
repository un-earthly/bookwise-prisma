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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const OrderService = {
    createOrder: (userId, orderedBooks) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(orderedBooks.orderedBooks);
        const order = yield prisma.order.create({
            data: {
                userId,
                orderedBooks: { create: orderedBooks },
                status: 'pending'
            }
        });
        return order;
    }),
    getAllOrders: () => __awaiter(void 0, void 0, void 0, function* () {
        const orders = yield prisma.order.findMany({
            include: {
                orderedBooks: true
            }
        });
        return orders;
    }),
    getSingleOrder: (orderId) => __awaiter(void 0, void 0, void 0, function* () {
        const order = yield prisma.order.findUnique({
            where: { id: orderId },
            include: {
                orderedBooks: true
            }
        });
        return order;
    })
};
exports.default = OrderService;
