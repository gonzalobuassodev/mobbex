import { Router } from 'express';
import { createCheckoutController } from '../controllers/createCheckout.controller';
import { getCheckoutController } from '../controllers/getCheckout.controller';
import { updateWebhookController } from '../controllers/updateWebhook.controllers';

const route = Router();

route.post('/', createCheckoutController);

route.post('/webhook', updateWebhookController);

route.get('/', getCheckoutController);

export default route;
