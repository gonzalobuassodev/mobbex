import { CreateCheckoutMobbex } from '../../../../../src/checkout/domain/service/CreateCheckoutMobbex';
import {
  Checkout,
  CheckoutPrimitive,
  User,
} from '../../../domain/entity/checkout';
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
} from '../../../domain/entity/valueObjects';
import { CheckoutRepository } from '../../../domain/repository/checkoutRepository';
import { UuidGenerator } from '../../../domain/utils/uuidGenerator';

export class CheckoutCreatorUseCase {
  private readonly _checkoutRepository: CheckoutRepository;
  private readonly _uuidGenerator: UuidGenerator;
  private readonly _createCheckoutMobbex: CreateCheckoutMobbex;
  constructor(
    checkoutRepository: CheckoutRepository,
    uuidGenerator: UuidGenerator
  ) {
    this._checkoutRepository = checkoutRepository;
    this._uuidGenerator = uuidGenerator;
    this._createCheckoutMobbex = new CreateCheckoutMobbex();
  }

  async run(params: CheckoutPrimitive): Promise<Checkout> {
    const user = new User({
      email: new CheckoutEmail(params.customer.email),
      name: new CheckoutName(params.customer.name),
      identification: new CheckoutIdentification(
        params.customer.identification
      ),
    });

    const newCheckout = new Checkout({
      id: new CheckoutId(this._uuidGenerator.generate()),
      total: new CheckoutTotal(params.total),
      description: new CheckoutDescription(params.description),
      reference: new CheckoutReference(this._uuidGenerator.generate()),
      currency: new CheckoutCurrency(params.currency),
      test: new CheckoutTest(params.test),
      return_url: new CheckoutReturn_Url(params.return_url),
      webhook: new CheckoutWebhook(params.webhook),
      customer: user,
      checkout_url: new CheckoutUrl(''),
      status: new CheckoutStatus(''),
    });

    const resultMobbex = await this._createCheckoutMobbex.run(newCheckout);
    newCheckout.checkout_url = new CheckoutUrl(resultMobbex.data.url);

    const checkoutCreated = await this._checkoutRepository.create(newCheckout);

    return checkoutCreated;
  }
}
