import {
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import PayPalService from './paypal.service';

@ApiTags('Paypal Payment')
@Controller('paypal')
export default class PaypalController {
  constructor(private readonly paypalService: PayPalService) {}

  @UseGuards(JwtAuthenticationGuard)
  @Post('order')
  async makePayment() {
    return await this.paypalService.createOrder();
  }

  @UseGuards(JwtAuthenticationGuard)
  @Post('capture/:orderId')
  async capture(@Param('orderId') orderId: string) {
    return await this.paypalService.capturePayment(orderId);
  }
}
