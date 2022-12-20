import { Router, Request, Response, NextFunction } from 'express';
import checkoutRoutes from './checkout.routes';

const route = Router();

route.use('/checkout', checkoutRoutes);

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // console.log('error', err);
  if (err instanceof Error) {
    res.status(404).json({ status: 'error', message: err.message });
  }
});

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // console.log('error', err);
  res.status(500).json({ status: 'error', message: err.message });
});

export { route };
