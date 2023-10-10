import { AccessTokenPayload } from "../utils/token";

declare module 'express-serve-static-core' {
    interface Request {
        user?: AccessTokenPayload;
    }
}
