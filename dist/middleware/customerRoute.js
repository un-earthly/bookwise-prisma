"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
function adminRoute(req, res, next) {
    const userRole = req.user.role;
    if (userRole !== 'customer') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}
exports.adminRoute = adminRoute;
