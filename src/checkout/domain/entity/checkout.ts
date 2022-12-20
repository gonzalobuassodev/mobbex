import {
  CheckoutCurrency,
  CheckoutDescription,
  CheckoutEmail,
  CheckoutId,
  CheckoutIdentification,
  CheckoutName,
  CheckoutReference,
  CheckoutReturn_Url,
  CheckoutStatus,
  CheckoutTest,
  CheckoutTotal,
  CheckoutUrl,
  CheckoutWebhook,
} from './valueObjects';

export interface CheckoutPrimitive {
  id: string;
  total: number;
  description: string;
  reference: string;
  currency: string;
  test: boolean;
  return_url: string;
  webhook: string;
  customer: UserPrimitive;
  checkout_url?: string;
  status?: string;
}

export interface UserPrimitive {
  email: string;
  name: string;
  identification: string;
}

export interface WebhookUpdatePrimitive {
  reference: string;
  status: string;
}

export class Checkout {
  readonly id: CheckoutId;
  readonly total: CheckoutTotal;
  readonly description: CheckoutDescription;
  readonly reference: CheckoutReference;
  readonly currency: CheckoutCurrency;
  readonly test: CheckoutTest;
  readonly return_url: CheckoutReturn_Url;
  readonly webhook: CheckoutWebhook;
  readonly customer: User;
  checkout_url: CheckoutUrl;
  readonly status: CheckoutStatus;
  constructor({
    id,
    total,
    description,
    reference,
    currency,
    test,
    return_url,
    webhook,
    customer,
    checkout_url,
    status,
  }: {
    id: CheckoutId;
    total: CheckoutTotal;
    description: CheckoutDescription;
    reference: CheckoutReference;
    currency: CheckoutCurrency;
    test: CheckoutTest;
    return_url: CheckoutReturn_Url;
    webhook: CheckoutWebhook;
    customer: User;
    checkout_url: CheckoutUrl;
    status: CheckoutStatus;
  }) {
    this.id = id;
    this.total = total;
    this.description = description;
    this.reference = reference;
    this.currency = currency;
    this.test = test;
    this.return_url = return_url;
    this.webhook = webhook;
    this.customer = customer;
    this.checkout_url = checkout_url;
    this.status = status;
  }
}

export class User {
  readonly email: CheckoutEmail;
  readonly name: CheckoutName;
  readonly identification: CheckoutIdentification;

  constructor({
    email,
    name,
    identification,
  }: {
    email: CheckoutEmail;
    name: CheckoutName;
    identification: CheckoutIdentification;
  }) {
    this.email = email;
    this.name = name;
    this.identification = identification;
  }
}

export class WebhookUpdate {
  readonly reference: CheckoutReference;
  readonly status: CheckoutStatus;
  constructor({
    reference,
    status,
  }: {
    reference: CheckoutReference;
    status: CheckoutStatus;
  }) {
    this.reference = reference;
    this.status = status;
  }
}
