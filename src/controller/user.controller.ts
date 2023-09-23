import { UserService } from "../service/user.service";
import catchAsync from "../utils/catchAsync";
import { sendResponse } from "../utils/responseUtils";
import { generateAccessToken, generateRefreshToken } from "../utils/token";



const UserController = {
    signup: catchAsync(async (req, res) => {
        const user = await UserService.createUser(req.data)


        const accessToken = generateAccessToken({ userId:user.id });
        const refreshToken = generateRefreshToken({ userId: user.id });

        sendResponse(res, 200, { user, accessToken, refreshToken })
    }),
    getAllUsers: () => { },
    getSingleUser: () => { },
    updateUser: () => { },
    deleteUser: () => { },
}

export default UserController;