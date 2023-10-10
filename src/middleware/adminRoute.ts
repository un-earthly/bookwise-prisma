import { NextFunction, Request, Response } from 'express';

export function adminRoute(
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!req.user) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    const userRole = req.user.role;

    if (userRole !== 'admin') {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();
}
