"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function globalErrorHandler(err, req, res, next) {
    console.error(err.stack);
    if (err.name === 'PrismaClientKnownRequestError') {
        return res.status(400).json({ error: 'Prisma database error' });
    }
    return res.status(500).json({ error: 'Something went wrong' });
}
exports.default = globalErrorHandler;
