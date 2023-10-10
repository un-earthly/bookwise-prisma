import { type Request, type Response, type NextFunction } from 'express'

function globalErrorHandler (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(err.stack)

  if (err.name === 'PrismaClientKnownRequestError') {
    res.status(400).json({ error: 'Prisma database error' })
  } else {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export default globalErrorHandler
