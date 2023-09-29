import express from "express";
const userRouter = express.Router();
import UserController from '../controller/user.controller';
import upload from "../middleware/upload";


userRouter.post('/', upload.single("profileImg"), UserController.signup);
userRouter.get('/', UserController.getAllUsers);
userRouter.get('/:id', UserController.getSingleUser);
userRouter.patch('/:id', UserController.updateUser);
userRouter.delete('/:id', UserController.deleteUser);

export default userRouter;