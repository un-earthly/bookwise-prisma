import express from "express";
const orderRouter = express.Router();
import OrderController from '../controller/order.controller';


orderRouter.post('/create-order', OrderController.createOrder);
orderRouter.get('/', OrderController.getAllOrders);
orderRouter.get('/:orderId', OrderController.getSingleOrder);

export default orderRouter;