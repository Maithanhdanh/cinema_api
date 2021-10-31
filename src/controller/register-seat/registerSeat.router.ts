import { Router } from 'express';
import registerSeatValidator from '@controller/register-seat/registerSeat.validator';
import registerSeatController from '@controller/register-seat/registerSeat.controller';

const router = Router();

router.post('/register-seat', registerSeatValidator, registerSeatController);

export default router;
