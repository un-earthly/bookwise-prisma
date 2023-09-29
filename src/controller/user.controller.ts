import { UserService } from "../service/user.service";
import catchAsync from "../utils/catchAsync";
import { sendResponse } from "../utils/responseUtils";


const UserController = {
    getAllUsers: catchAsync(async (req, res) => {
        const users = await UserService.getAllUsers();
        sendResponse(res, 200, { users });
    }),
    getSingleUser: catchAsync(async (req, res) => {
        const user = await UserService.getSingleUser(req.params.id);
        sendResponse(res, 200, { user });
    }),
    updateUser: catchAsync(async (req, res) => {
        const updatedUser = await UserService.updateUser(req.params.id, req.body);
        sendResponse(res, 200, { updatedUser });
    }),
    deleteUser: catchAsync(
        async (req, res) => {
            const user = await UserService.deleteUser(req.params.id)
            sendResponse(res, 200, { user })
        }
    ),
}

export default UserController;