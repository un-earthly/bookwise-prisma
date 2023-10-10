"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
function adminRoute(req, res, next) {
    if (!req.user) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    const userRole = req.user.role;
    if (userRole !== 'admin') {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
}
exports.adminRoute = adminRoute;
