import { type NextFunction, type Request, type Response } from 'express'

type AsyncFunction = (...args: any[]) => Promise<any>

const catchAsync = (fn: AsyncFunction) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next)
  }
}

export default catchAsync
