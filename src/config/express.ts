import express from 'express';
import errorHandler from '@controller/middleware/errorHandler';
import seatRouter from '@controller/register-seat/registerSeat.router';

const createServer = (): express.Application => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.disable('x-powered-by');

  app.get('/health', (_req, res) => {
    res.send('UP');
  });

  app.use('/seat', seatRouter);

  app.use(errorHandler);

  return app;
};

export { createServer };
