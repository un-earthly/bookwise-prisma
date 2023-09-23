import { AccessTokenPayload } from './tokenService';

declare module 'express-serve-static-core' {
    interface Request {
        user?: AccessTokenPayload;
    }
}
