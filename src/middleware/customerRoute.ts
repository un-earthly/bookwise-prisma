import { NextFunction, Request, Response } from 'express';

export function customerRoute(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.user) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    const userRole = req.user.role;

    if (userRole !== 'customer') {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();
}
