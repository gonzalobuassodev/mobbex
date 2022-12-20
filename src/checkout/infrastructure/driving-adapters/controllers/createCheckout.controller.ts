import { NextFunction, Request, Response } from 'express';
import { CheckoutCreatorUseCase } from '../../../../../src/checkout/application/useCases/checkoutCreator';
import { CheckoutPrimitive } from '../../../../../src/checkout/domain/entity/checkout';
import { MongoDBCheckoutRepository } from '../../implementations/MongoDB/MongoDB.CheckoutRepository';
import { UuidV4Generator } from '../../utils/UuidGenerator';

export const createCheckoutController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = new MongoDBCheckoutRepository();
  const uuidGenerator = new UuidV4Generator();

  const checkoutCreatorUseCase = new CheckoutCreatorUseCase(
    repo,
    uuidGenerator
  );

  try {
    const {
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
    } = req.body;

    console.log(customer);

    const newCheckout: CheckoutPrimitive = {
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
    };

    const checkoutCreated = await checkoutCreatorUseCase.run(newCheckout);
    res.status(200).json({ status: 'success', data: checkoutCreated });
  } catch (error) {
    next(error);
  }
};
