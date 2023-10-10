import { Response } from "express";

export function sendResponse(res: Response, statusCode: number, data?: any, message?: string, token?: string) {
    const response: { status: string; message?: string; data?: any, token?: string } =
        { status: statusCode === 200 ? "success" : "error", };

    if (message) {
        response.message = message;
    }

    if (data) {
        response.data = data;
        response.token = token;
    }

    res.status(statusCode).json(response);
}
