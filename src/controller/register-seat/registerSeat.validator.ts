import { Request, Response, NextFunction } from 'express';
import { logger } from '@config/logger';
import * as yup from 'yup';

const registerSeatBodySchema = yup.object({
  seatNumber: yup.string().required(),
});

const validateRegisterSeat = async (
  req: Request,
  _res: Response,
  next: NextFunction,
): Promise<void> => {
  const funcName = validateRegisterSeat.name;

  try {
    await registerSeatBodySchema.validate(req.body, {
      stripUnknown: true,
      strict: true,
    });

    next();
  } catch (yupError: any) {
    logger.error(`[${funcName}] register seat validator error`, yupError);
    next(yupError.errors[0]);
  }
};

export default validateRegisterSeat;
