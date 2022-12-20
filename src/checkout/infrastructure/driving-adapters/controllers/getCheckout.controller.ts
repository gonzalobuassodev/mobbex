import { NextFunction, Request, Response } from 'express';
import { emitWarning } from 'process';
import { CheckoutGetterUseCase } from '../../../../../src/checkout/application/useCases/checkoutGetter';
import { MongoDBCheckoutRepository } from '../../implementations/MongoDB/MongoDB.CheckoutRepository';

export const getCheckoutController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const repo = new MongoDBCheckoutRepository();
  const checkoutGetterUseCase = new CheckoutGetterUseCase(repo);

  try {
    const checkout = await checkoutGetterUseCase.run();
    res.status(200).json({ status: 'success', data: checkout });
  } catch (error) {
    next(error);
  }
};
