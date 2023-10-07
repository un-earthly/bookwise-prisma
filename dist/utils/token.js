"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = exports.verifyRefreshToken = exports.verifyAccessToken = exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const accessTokenSecret = '5f2a1f0fe978e5ae25a8876c3e8db0b683490eda39575abdc9796d7c6b80f29c094057dad211d8a61d25b1d3510514c1a69e17d614fadef9abc908e4882ba5f6';
const refreshTokenSecret = 'e07f980e1cb55cdf8cf84b618a7494addd8690f1b732d74a48e9780f2b63070a1a82a8ad052ab25ca0cdf5af9a2a9e61e80cd503e816ffd07faf5b8811a90ace';
function generateAccessToken(payload) {
    return jsonwebtoken_1.default.sign(payload, accessTokenSecret, { expiresIn: '1y' });
}
exports.generateAccessToken = generateAccessToken;
function verifyAccessToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, accessTokenSecret);
    }
    catch (error) {
        return null;
    }
}
exports.verifyAccessToken = verifyAccessToken;
function verifyRefreshToken(token) {
    try {
        return jsonwebtoken_1.default.verify(token, refreshTokenSecret);
    }
    catch (error) {
        return null;
    }
}
exports.verifyRefreshToken = verifyRefreshToken;
function verifyJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
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
    if (!payload) {
        return res.sendStatus(403);
    }
    req.user = payload;
    next();
}
exports.verifyJWT = verifyJWT;
