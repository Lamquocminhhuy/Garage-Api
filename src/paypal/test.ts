import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PayPalService {
  constructor(
    private httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getAccessToken() {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    const {
      data: { access_token },
    } = await this.httpService
      .post(
        `${this.configService.get('PAYPAL_API_URL')}/v1/oauth2/token`,
        params,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          auth: {
            username: this.configService.get('PAYPAL_CLIENT_ID'),
            password: this.configService.get('PAYPAL_CLIENT_SECRET'),
          },
        },
      )
      .toPromise()
      .catch((error) => {
        console.log(error);
        throw error;
      });
    return access_token;
  }

  async createPayment() {
    // thanh toan
    var create_payment_json = {
      intent: 'authorize',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'http://localhost:3000/paypal/success',
        cancel_url: 'http://localhost:5000/paypal/cancel',
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: 'Vé máy bay',
                sku: 'item',
                price: '1.00',
                currency: 'USD',
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: 'USD',
            total: '1.00',
          },
          description: 'Mua vé máy bay đi du lịch.',
        },
      ],
    };

    const access_token: string = await this.getAccessToken();

    const response = await this.httpService
      .post(
        `${this.configService.get('PAYPAL_API_URL')}/v1/payments/payment`,
        create_payment_json,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      )
      .toPromise()
      .catch((error) => {
        console.log(error);
        throw error;
      });

    for (var index = 0; index < response.data.links.length; index++) {
      //Redirect user to this endpoint for redirect url
      if (response.data.links[index].rel === 'approval_url') {
        console.log(['test'], response.data.links[index].href);
      }
    }
  }

  async paymentExcute(PayerId: string, paymentId: string) {
    var execute_payment_json = {
      payer_id: PayerId,
      transactions: [
        {
          amount: {
            currency: 'USD',
            total: '1.00',
          },
        },
      ],
    };

    const access_token: string = await this.getAccessToken();
    const response = await this.httpService
      .post(
        `${this.configService.get(
          'PAYPAL_API_URL',
        )}/v1/payments/payment/${paymentId}/execute`,
        execute_payment_json,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        },
      )
      .toPromise();
    return response.data;
  }
}

export default PayPalService;
