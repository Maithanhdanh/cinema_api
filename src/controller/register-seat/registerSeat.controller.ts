import { logger } from '@server/config/logger';
import { Request, Response, NextFunction } from 'express';

const registerSeatController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const funcName = registerSeatController.name;
  try {
    logger.info(`[${funcName}] start request`);

    logger.debug(`[${funcName}] register seat number`, req.body);

    res.json('ok');
  } catch (error) {
    logger.info(`[${funcName}] error`, error);
    next(error);
  }
};

export default registerSeatController;
