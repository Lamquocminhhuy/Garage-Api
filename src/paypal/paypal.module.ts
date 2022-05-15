import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import PaypalController from './paypal.controller';
import PayPalService from './paypal.service';
import { HttpModule } from '@nestjs/axios';
@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [PaypalController],
  providers: [PayPalService],
})
export class PaypalModule {}