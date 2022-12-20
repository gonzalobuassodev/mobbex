export interface Data {
  total: number;
  description: string;
  customer: Customer;
}

export interface Customer {
  email: string;
  name: string;
  identification: string;
}

export interface Checkout extends Data {
  id: string;
  reference: string;
  currency: string;
  status: string;
}
