import { Checkout } from 'src/checkout/domain/entity/checkout';
import { CheckoutRepository } from 'src/checkout/domain/repository/checkoutRepository';

export class CheckoutGetterUseCase {
  private _checkoutRepository: CheckoutRepository;
  constructor(checkoutRepository: CheckoutRepository) {
    this._checkoutRepository = checkoutRepository;
  }

  async run(): Promise<Checkout[]> {
    const checkout = await this._checkoutRepository.getAll();
    return checkout;
  }
}
