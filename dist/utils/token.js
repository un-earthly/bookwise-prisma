"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = exports.verifyAccessToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessTokenSecret = '5f2a1f0fe978e5ae25a8876c3e8db0b683490eda39575abdc9796d7c6b80f29c094057dad211d8a61d25b1d3510514c1a69e17d614fadef9abc908e4882ba5f6';
function generateAccessToken(payload) {
    return jsonwebtoken_1.default.sign(payload, accessTokenSecret, { expiresIn: '1y' });
}
exports.generateAccessToken = generateAccessToken;
;
function verifyAccessToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, accessTokenSecret);
    }
    catch (error) {
        return null;
    }
}
exports.verifyAccessToken = verifyAccessToken;
function verifyJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader === null || authHeader === undefined) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
    }
    let token;
    if (authHeader.startsWith('Bearer ')) {
        token = authHeader.slice(7);
    }
    else {
        token = authHeader;
    }
    const payload = verifyAccessToken(token);
    console.log(token);
    if (payload === null) {
        res.status(403).json({ message: 'Forbidden' });
        return;
    }
    req.user = payload;
    next();
}
exports.verifyJWT = verifyJWT;
