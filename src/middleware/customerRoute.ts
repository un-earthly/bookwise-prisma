import { type Request, type Response, type NextFunction } from 'express'

export function customerRoute (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.user !== undefined) {
    if (req.user.role !== 'customer') {
      res.status(403).json({ message: 'Forbidden' })
      return
    }
  }

  next()
}
