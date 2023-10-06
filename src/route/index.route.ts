import bookRouter from "./book.route";
import CategoryRouter from "./category.route";
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
        path: "/categories",
        children: CategoryRouter
    },
    {
        path: "/books",
        children: bookRouter
    },
    {
        path: "/orders",
        children: orderRouter
    }
]
routes.forEach(r => router.use(r.path, r.children))

export default router