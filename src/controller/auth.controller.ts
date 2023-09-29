import { AuthService } from "../service/auth.services";
import catchAsync from "../utils/catchAsync";
import { sendResponse } from "../utils/responseUtils";
import { generateAccessToken } from "../utils/token";
import bcrypt from "bcrypt"
const authController = {
    signup: catchAsync(async (req, res) => {
        // const data = {
        //     ...req.body,
        //     profileImg: req.file.filename
        // }
        const { password, ...userData } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await AuthService.createUser({ ...userData, password: hashedPassword });
        const token = generateAccessToken({ id: user.id, role: user.role, email: user.email });
        sendResponse(res, 200, { user, token });
    }),
    login: catchAsync(async (req, res) => {
        const { email, password } = req.body;

        const user = await AuthService.loginUser(email, password);

        if (!user) {
            return sendResponse(res, 401, { message: "Invalid credentials" });
        }

        const token = generateAccessToken({ id: user.id, role: user.role, email: user.email });

        sendResponse(res, 200, { user, token });
    }),
}

export default authController