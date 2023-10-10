"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendResponse = void 0;
function sendResponse(res, statusCode, data, message, token) {
    const response = { status: statusCode === 200 ? 'success' : 'error' };
    if (message !== undefined) {
        response.message = message;
    }
    if (data !== undefined && token !== undefined) {
        response.data = data;
        response.token = token;
    }
    res.status(statusCode).json(response);
}
exports.sendResponse = sendResponse;
