import { logger } from '@config/logger';
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

const errorHandler: ErrorRequestHandler = (
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (res.headersSent) {
    return next(error);
  }

  logger.error(`[${errorHandler.name}] Error`, error);
  res.json(error)
};

export default errorHandler;
