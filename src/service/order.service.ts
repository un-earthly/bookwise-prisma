import { PrismaClient } from '@prisma/client';
import catchAsync from '../utils/catchAsync';

const prisma = new PrismaClient();

const OrderService = {
    createOrder: catchAsync(async (userId: string, orderedBooks: any) => {
        console.log(orderedBooks.orderedBooks)
        const order = await prisma.order.create({
            data: {
                userId,
                orderedBooks: { create: orderedBooks },
                status: 'pending',
            },
        });
        return order;
    }),

    getAllOrders:catchAsync( async () => {
        const orders = await prisma.order.findMany({
            include: {
                orderedBooks: true,
            },
        });
        return orders;
    }),

    getSingleOrder: catchAsync(async (orderId: string) => {
        const order = await prisma.order.findUnique({
            where: { id: orderId },
            include: {
                orderedBooks: true,
            },
        });
        return order;
    }),
};

export default OrderService;
