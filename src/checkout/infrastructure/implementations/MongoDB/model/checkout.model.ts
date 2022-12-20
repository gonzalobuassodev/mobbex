import mongoose, { Schema, model } from 'mongoose';
import dotenv from 'dotenv';
import { Checkout } from 'src/checkout/domain/entity/checkout';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const conn = mongoose.createConnection(MONGODB_URI as string);

const checkoutSchema = new Schema<Checkout>({
  id: {
    type: String,
  },
  total: {
    type: Number,
  },
  description: {
    type: String,
  },
  reference: {
    type: String,
  },
  currency: {
    type: String,
  },
  test: {
    type: String,
  },
  return_url: {
    type: String,
  },
  webhook: {
    type: String,
  },
  customer: {
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    identification: {
      type: String,
    },
  },
  checkout_url: {
    type: String,
  },
  status: {
    type: String,
  },
});

export const CheckoutModel = conn.model('Checkout', checkoutSchema);
