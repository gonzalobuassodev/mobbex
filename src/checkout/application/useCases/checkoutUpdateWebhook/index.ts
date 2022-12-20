import {
  CheckoutPrimitive,
  WebhookUpdate,
  WebhookUpdatePrimitive,
} from '../../../../../src/checkout/domain/entity/checkout';
import {
  CheckoutId,
  CheckoutStatus,
} from '../../../../../src/checkout/domain/entity/valueObjects';
import { CheckoutRepository } from '../../../../../src/checkout/domain/repository/checkoutRepository';
import { CheckoutGetterByReferenceUseCase } from '../checkoutGetterByReference';

export class CheckoutUpdaterWebhookUseCase {
  private readonly _checkoutRepository: CheckoutRepository;
  private readonly _checkoutGetterByReference: CheckoutGetterByReferenceUseCase;
  constructor(checkoutRepository: CheckoutRepository) {
    this._checkoutRepository = checkoutRepository;
    this._checkoutGetterByReference = new CheckoutGetterByReferenceUseCase(
      this._checkoutRepository
    );
  }

  async run(params: WebhookUpdatePrimitive): Promise<void> {
    const checkoutToUpdate = await this._checkoutGetterByReference.run(
      params.reference
    );

    if (!checkoutToUpdate) throw new Error();

    const dataToUpdate = new WebhookUpdate({
      reference: new CheckoutId(params.reference),
      status: new CheckoutStatus(params.status),
    });

    const checkoutUpdated = await this._checkoutRepository.updateWebhook(
      dataToUpdate
    );

    console.log(checkoutUpdated);
  }
}
