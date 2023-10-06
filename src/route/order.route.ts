import express from "express";
const orderRouter = express.Router();
import OrderController from '../controller/order.controller';
import { verifyJWT } from "../utils/token";


orderRouter.post('/create-order',verifyJWT, OrderController.createOrder);
orderRouter.get('/', OrderController.getAllOrders);
orderRouter.get('/:orderId', OrderController.getSingleOrder);

export default orderRouter;