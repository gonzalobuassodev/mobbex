import {
  Checkout,
  CheckoutPrimitive,
  UserPrimitive,
  WebhookUpdate,
} from '../../../../../src/checkout/domain/entity/checkout';
import { CheckoutRepository } from '../../../../../src/checkout/domain/repository/checkoutRepository';
import { CheckoutModel } from './model/checkout.model';

export class MongoDBCheckoutRepository implements CheckoutRepository {
  async getAll(): Promise<Checkout[]> {
    const result = await CheckoutModel.find();
    return result;
  }

  async getByReference(reference: string): Promise<Checkout | null> {
    const result = await CheckoutModel.findOne({ reference });
    return result;
  }

  async create(checkout: Checkout): Promise<Checkout> {
    const user: UserPrimitive = {
      email: checkout.customer.email._value,
      name: checkout.customer.name._value,
      identification: checkout.customer.identification._value,
    };

    const checkoutData: CheckoutPrimitive = {
      id: checkout.id._value,
      total: checkout.total._value,
      description: checkout.description._value,
      reference: checkout.reference._value,
      test: checkout.test._value,
      currency: checkout.currency._value,
      return_url: checkout.return_url._value,
      webhook: checkout.webhook._value,
      customer: user,
      checkout_url: checkout.checkout_url._value,
      status: checkout.status._value,
    };

    console.log(checkoutData);

    const result = await CheckoutModel.create(checkoutData);
    return result;
  }

  async updateWebhook(data: WebhookUpdate): Promise<Checkout | null> {
    const checkoutUpdated = await CheckoutModel.findOneAndUpdate(
      { reference: data.reference._value },
      { status: data.status._value },
      { new: true }
    );

    return checkoutUpdated;
  }
}
