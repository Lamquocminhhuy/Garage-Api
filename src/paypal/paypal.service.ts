import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import fetch from 'node-fetch';

@Injectable()
export class PayPalService {
  constructor(
    private httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async generateAccessToken() {
    const auth = Buffer.from(
      this.configService.get('PAYPAL_CLIENT_ID') +
        ':' +
        this.configService.get('PAYPAL_CLIENT_SECRET'),
    ).toString('base64');
    const response = await fetch(
      `${this.configService.get('PAYPAL_API_URL')}/v1/oauth2/token`,
      {
        method: 'post',
        body: 'grant_type=client_credentials',
        headers: {
          Authorization: `Basic ${auth}`,
        },
      },
    );
    const data = await response.json();
    console.log(data.access_token);
    return data.access_token;
  }

  async createOrder() {
    const purchaseAmount = '1234.00'; // TODO: pull prices from a database
    const accessToken = await this.generateAccessToken();
    const url = `${this.configService.get(
      'PAYPAL_API_URL',
    )}/v2/checkout/orders`;
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: purchaseAmount,
            },
          },
        ],
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  async capturePayment(orderId) {
    const accessToken = await this.generateAccessToken();
    const url = `${this.configService.get(
      'PAYPAL_API_URL',
    )}/v2/checkout/orders/${orderId}/capture`;
    const response = await fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data;
  }
}

export default PayPalService;
