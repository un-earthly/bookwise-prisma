import { Request, Response } from "express";

export function sendResponse(res: Response, statusCode: number, data?: any, message?: string) {
    const response: { status: string; message?: string; data?: any } = {
        status: statusCode === 200 ? "success" : "error",
    };

    if (message) {
        response.message = message;
    }

    if (data) {
        response.data = data;
    }

    res.status(statusCode).json(response);
}
