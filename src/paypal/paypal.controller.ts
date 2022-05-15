import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import PayPalService from './paypal.service';
import { RequestWithPayPal } from './requestWithPaypal';

@ApiTags('paypal')
@Controller('paypal')
export default class PaypalController {
  constructor(private readonly paypalService: PayPalService) {}

  @Get('test')
  async test() {
    return await this.paypalService.generateAccessToken();
  }

  @Post('order')
  async makePayment() {
    return await this.paypalService.createOrder();
  }

  @Post('capture/:orderId')
  async capture(@Param('orderId') orderId: string) {
    return await this.paypalService.capturePayment(orderId)
  }

  // @Post('payment')
  // async makePayment() {
  //   await this.paypalService.createPayment();
  // }

  // @Get('success')
  // async excutePayment(@Req() request: RequestWithPayPal) {
  //   console.log(['request'], request.query);
  //   const response = await this.paypalService.paymentExcute(
  //     request.query.PayerID,
  //     request.query.paymentId,
  //   );
  //   console.log(['response'], response);
  //   return response;
  // }
}
