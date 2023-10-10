"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoute = void 0;
function adminRoute(req, res, next) {
    if (req.user !== undefined) {
        if (req.user.role !== 'admin') {
            res.status(403).json({ message: 'Only Admins Can Access. Forbidden' });
            return;
        }
    }
    next();
}
exports.adminRoute = adminRoute;
