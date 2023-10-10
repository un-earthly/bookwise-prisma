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
        const orders = await OrderService.getAllOrders(); 
        sendResponse(res, 200, orders);
    }),
    getSingleOrder: catchAsync(async (req: Request, res: Response) => {
        const orderId = req.params.orderId; 
        const order = await OrderService.getSingleOrder(orderId);
        if (!order) {
            sendResponse(res, 404, "Order not found");
        } else {
            sendResponse(res, 200, order);
        }
    }),
}

export default categoryController;
