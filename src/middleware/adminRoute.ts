import { type NextFunction, type Request, type Response } from 'express'

export function adminRoute (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (req.user !== undefined) {
    if (req.user.role !== 'admin') {
      res.status(403).json({ message: 'Only Admins Can Access. Forbidden' })
      return
    }
  }

  next()
}
