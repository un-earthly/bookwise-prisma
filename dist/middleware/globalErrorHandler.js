"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function globalErrorHandler(err, req, res, next) {
    console.error(err.stack);
    if (err.name === 'PrismaClientKnownRequestError') {
        res.status(400).json({ error: 'Prisma database error' });
    }
    else {
        res.status(500).json({ error: 'Something went wrong' });
    }
}
exports.default = globalErrorHandler;
