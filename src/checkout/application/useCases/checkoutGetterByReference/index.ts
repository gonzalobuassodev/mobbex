import { Checkout } from 'src/checkout/domain/entity/checkout';
import { CheckoutRepository } from 'src/checkout/domain/repository/checkoutRepository';

export class CheckoutGetterByReferenceUseCase {
  private _checkoutRepository: CheckoutRepository;
  constructor(checkoutRepository: CheckoutRepository) {
    this._checkoutRepository = checkoutRepository;
  }

  async run(reference: string): Promise<Checkout[]> {
    const checkout = await this._checkoutRepository.getAll();
    return checkout;
  }
}
