import { createServer } from '@config/express';
import supertest from 'supertest';

describe('registerSeat.controller', () => {
  let agent: any;
  beforeAll(async () => {
    const app = createServer();
    agent = supertest.agent(app);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should pass when call request with right format', (done) => {
    agent
      .post('/seat/register-seat')
      .set('content-type', 'application/json')
      .send({ seatNumber: '123' })
      .expect('"ok"', done);
  });

  it('should throw error when invalid seatNumber', (done) => {
    agent
      .post('/seat/register-seat')
      .set('content-type', 'application/json')
      .send({ seatNumber: {} })
      .expect(
        '"seatNumber must be a `string` type, but the final value was: `{}`."',
        done,
      );
  });
});
