import bookRouter from "./book.route";
import categoryRouter from "./category.route";
import orderRouter from "./order.route";
import userRouter from "./user.route";

const router = require("express").Router();

const routes = [
    {
        path: "user",
        children: userRouter
    },
    {
        path: "category",
        children: categoryRouter
    },
    {
        path: "books",
        children: bookRouter
    },
    {
        path: "order",
        children: orderRouter
    }
]

// Loop through the route configurations and mount them
routes.forEach(r => router.use(r.path, r.children))

export default router