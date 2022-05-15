import { Request } from 'express';

export interface RequestWithPayPal extends Request {
  query: {
    paymentId: string;
    PayerID: string;
  };
}