import bookRouter from "./book.route";
import categoryRouter from "./category.route";
import orderRouter from "./order.route";
import userRouter from "./user.route";
import authRouter from "./auth.route";

const router = require("express").Router();

const routes = [
    {
        path: "/auth",
        children: authRouter
    },
    {
        path: "/users",
        children: userRouter
    },
    {
        path: "/category",
        children: categoryRouter
    },
    {
        path: "/books",
        children: bookRouter
    },
    {
        path: "/order",
        children: orderRouter
    }
]
routes.forEach(r => router.use(r.path, r.children))

export default router