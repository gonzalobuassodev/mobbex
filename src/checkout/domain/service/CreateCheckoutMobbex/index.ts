import axios from 'axios';
import {
  Checkout,
  CheckoutPrimitive,
  UserPrimitive,
} from '../../entity/checkout';

export class CreateCheckoutMobbex {
  async run(data: Checkout) {
    const user: UserPrimitive = {
      email: data.customer.email._value,
      name: data.customer.name._value,
      identification: data.customer.identification._value,
    };

    const checkout: CheckoutPrimitive = {
      id: data.id._value,
      total: data.total._value,
      description: data.description._value,
      reference: data.reference._value,
      test: data.test._value,
      currency: data.currency._value,
      return_url: data.return_url._value,
      webhook: data.webhook._value,
      customer: user,
    };

    const result = await axios.post(
      'https://api.mobbex.com/p/checkout',
      checkout,
      {
        headers: {
          'x-api-key': 'zJ8LFTBX6Ba8D611e9io13fDZAwj0QmKO1Hn1yIj',
          'x-access-token': 'd31f0721-2f85-44e7-bcc6-15e19d1a53cc',
        },
      }
    );

    return result.data;
  }
}
