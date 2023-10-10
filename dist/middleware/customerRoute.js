"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoute = void 0;
function customerRoute(req, res, next) {
    if (req.user !== undefined) {
        if (req.user.role !== 'customer') {
            res.status(403).json({ message: 'Forbidden' });
            return;
        }
    }
    next();
}
exports.customerRoute = customerRoute;
