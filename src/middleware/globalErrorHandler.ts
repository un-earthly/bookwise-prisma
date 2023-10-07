import { Request, Response, NextFunction } from 'express';

function globalErrorHandler(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error(err.stack);

    if (err.name === 'PrismaClientKnownRequestError') {
        return res.status(400).json({ error: 'Prisma database error' });
    }

    return res.status(500).json({ error: 'Something went wrong' });
}

export default globalErrorHandler;
