import express from 'express'
import OrderController from '../controller/order.controller'
import { verifyJWT } from '../utils/token'
import { customerRoute } from '../middleware/customerRoute'
import { adminRoute } from '../middleware/adminRoute'
const orderRouter = express.Router()

orderRouter.post('/create-order', verifyJWT, customerRoute, OrderController.createOrder)
orderRouter.get('/', verifyJWT, adminRoute, OrderController.getAllOrders)
orderRouter.get('/:orderId', verifyJWT, OrderController.getSingleOrder)

export default orderRouter
