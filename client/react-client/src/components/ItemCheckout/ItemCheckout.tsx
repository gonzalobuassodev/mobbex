import React from 'react';
import { Checkout } from '../interfaces/checkout.interface';

export interface ItemCheckoutInterface {
  props: Checkout;
}

const ItemCheckout: React.FC<ItemCheckoutInterface> = ({ props }) => {
  return <li>{props.status}</li>;
};

export default ItemCheckout;
