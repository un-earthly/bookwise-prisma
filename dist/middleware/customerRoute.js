"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
function customerRoute(req, res, next) {
    if (!req.user) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    const userRole = req.user.role;
    if (userRole !== 'customer') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}
exports.customerRoute = customerRoute;
