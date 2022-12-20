import { NextFunction, Request, Response } from 'express';
import { CheckoutUpdaterWebhookUseCase } from '../../../../../src/checkout/application/useCases/checkoutUpdateWebhook';
import { WebhookUpdatePrimitive } from '../../../../../src/checkout/domain/entity/checkout';
import { MongoDBCheckoutRepository } from '../../implementations/MongoDB/MongoDB.CheckoutRepository';

export const updateWebhookController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const repo = new MongoDBCheckoutRepository();
    const checkoutUpdaterWebhookUseCase = new CheckoutUpdaterWebhookUseCase(
      repo
    );

    console.log(req.body.data.payment.reference);

    const dataToUpdate: WebhookUpdatePrimitive = {
      reference: req.body.data.payment.reference,
      status: req.body.data.payment.status.code,
    };

    const checkoutUpdated = await checkoutUpdaterWebhookUseCase.run(
      dataToUpdate
    );

    return checkoutUpdated;
  } catch (error) {
    next(error);
  }
};
