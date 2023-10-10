import { type NextFunction, type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'

export interface AccessTokenPayload {
  id: string
  role: string
  email: string
}

const accessTokenSecret: string = '5f2a1f0fe978e5ae25a8876c3e8db0b683490eda39575abdc9796d7c6b80f29c094057dad211d8a61d25b1d3510514c1a69e17d614fadef9abc908e4882ba5f6'

export function generateAccessToken (payload: AccessTokenPayload): string {
  return jwt.sign(payload, accessTokenSecret, { expiresIn: '1y' })
};

export function verifyAccessToken (token: string): AccessTokenPayload | null {
  try {
    return jwt.verify(token, accessTokenSecret) as AccessTokenPayload
  } catch (error) {
    return null
  }
}

export function verifyJWT (
  req: Request,
  res: Response<any, Record<string, any>>,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization

  if (authHeader === null || authHeader === undefined) {
    res.status(401).json({ message: 'Unauthorized' })
    return
  }

  let token

  if (authHeader.startsWith('Bearer ')) {
    token = authHeader.slice(7)
  } else {
    token = authHeader
  }

  const payload = verifyAccessToken(token)
  console.log(token)

  if (payload === null) {
    res.status(403).json({ message: 'Forbidden' })
    return
  }

  req.user = payload

  next()
}
