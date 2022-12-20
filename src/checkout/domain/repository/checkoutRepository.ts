import { Checkout, WebhookUpdate } from '../entity/checkout';

export interface CheckoutRepository {
  getAll: () => Promise<Checkout[]>;
  getByReference: (reference: string) => Promise<Checkout | null>;
  create: (checkout: Checkout) => Promise<Checkout>;
  updateWebhook: (checkout: WebhookUpdate) => Promise<Checkout | null>;
}
