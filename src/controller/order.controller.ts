import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { sendResponse } from "../utils/responseUtils";
import OrderService from "../service/order.service";

const categoryController = {
    createOrder: catchAsync(async (req: Request, res: Response) => {
        const order = await OrderService.createOrder(req.user.id, req.body.orderedBooks); 
        sendResponse(res, 200, order);
    }),
    getAllOrders: catchAsync(async (req: Request, res: Response) => {
        const orders = await OrderService.getAllOrders(); // Assuming you have a method in OrderService to fetch all orders
        sendResponse(res, 200, orders);
    }),
    getSingleOrder: catchAsync(async (req: Request, res: Response) => {
        const orderId = req.params.orderId; // Assuming you pass the orderId as a route parameter
        const order = await OrderService.getSingleOrder(orderId); // Assuming you have a method in OrderService to fetch a single order by ID
        if (!order) {
            sendResponse(res, 404, "Order not found");
        } else {
            sendResponse(res, 200, order);
        }
    }),
}

export default categoryController;
