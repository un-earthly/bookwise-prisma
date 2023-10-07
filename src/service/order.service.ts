import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const OrderService = {
    createOrder: async (userId: string, orderedBooks: any) => {
        console.log(orderedBooks.orderedBooks)
        const order = await prisma.order.create({
            data: {
                userId,
                orderedBooks: { create: orderedBooks },
                status: 'pending',
            },
        });
        return order;
    },

    getAllOrders: async () => {
        const orders = await prisma.order.findMany({
            include: {
                orderedBooks: true,
            },
        });
        return orders;
    },

   
};

export default OrderService;
