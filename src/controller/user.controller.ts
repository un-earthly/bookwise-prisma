import { UserService } from "../service/user.service";
import catchAsync from "../utils/catchAsync";
import { sendResponse } from "../utils/responseUtils";
import { generateAccessToken, generateRefreshToken } from "../utils/token";


const UserController = {
    signup: catchAsync(async (req, res) => {
        const data = {
            ...req.body,
            profileImg: req.file.filename
        }
        const user = await UserService.createUser(data);
        const accessToken = generateAccessToken({ id: user.id });
        const refreshToken = generateRefreshToken({ id: user.id });
        sendResponse(res, 200, { user, accessToken, refreshToken });
    }),

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