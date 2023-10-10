import { type Response } from 'express'

export function sendResponse (res: Response, statusCode: number, data?: any, message?: string, token?: string): void {
  const response: { status: string, message?: string, data?: any, token?: string } =
    { status: statusCode === 200 ? 'success' : 'error' }

  if (message !== undefined) {
    response.message = message
  }

  if (data !== undefined && token !== undefined) {
    response.data = data
    response.token = token
  }

  res.status(statusCode).json(response)
}
