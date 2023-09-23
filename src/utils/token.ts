// tokenService.ts
import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

interface AccessTokenPayload {
    id: string;
}

interface RefreshTokenPayload {
    id: string;
}

const accessTokenSecret = '5f2a1f0fe978e5ae25a8876c3e8db0b683490eda39575abdc9796d7c6b80f29c094057dad211d8a61d25b1d3510514c1a69e17d614fadef9abc908e4882ba5f6';
const refreshTokenSecret = 'e07f980e1cb55cdf8cf84b618a7494addd8690f1b732d74a48e9780f2b63070a1a82a8ad052ab25ca0cdf5af9a2a9e61e80cd503e816ffd07faf5b8811a90ace';

export function generateAccessToken(payload: AccessTokenPayload): string {
    return jwt.sign(payload, accessTokenSecret, { expiresIn: '15m' });
}

export function generateRefreshToken(payload: RefreshTokenPayload): string {
    return jwt.sign(payload, refreshTokenSecret, { expiresIn: '7d' });
}

export function verifyAccessToken(token: string): AccessTokenPayload | null {
    try {
        return jwt.verify(token, accessTokenSecret) as AccessTokenPayload;
    } catch (error) {
        return null;
    }
}

export function verifyRefreshToken(token: string): RefreshTokenPayload | null {
    try {
        return jwt.verify(token, refreshTokenSecret) as RefreshTokenPayload;
    } catch (error) {
        return null;
    }
}



export function authenticateToken(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401);
    }

    const token = authHeader.split(' ')[1];

    const payload = verifyAccessToken(token);

    if (!payload) {
        return res.sendStatus(403);
    }

    req.user = payload;

    next();
}
