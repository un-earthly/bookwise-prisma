import { NextFunction, Request, Response } from "express";

export function adminRoute(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const userRole = req.user.role;

    if (userRole !== 'customer') {
        return res.status(403).json({ message: 'Forbidden' });
    }


    next();
}
