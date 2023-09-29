import express from "express";
const userRouter = express.Router();
import UserController from '../controller/user.controller';
import { adminRoute } from "../middleware/adminRoute";
import { verifyJWT } from "../utils/token";


userRouter.get('/', verifyJWT, adminRoute, UserController.getAllUsers);
userRouter.get('/:id', verifyJWT, adminRoute, UserController.getSingleUser);
userRouter.patch('/:id', verifyJWT, adminRoute, UserController.updateUser);
userRouter.delete('/:id', verifyJWT, adminRoute, UserController.deleteUser);

export default userRouter;