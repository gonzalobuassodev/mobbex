import {
  Button,
  Container,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Data } from '../interfaces/checkout.interface';

import API from '../../utils/api';

export interface CheckoutInterface {}

const initialValue = {
  total: 100,
  description: '',
  customer: {
    email: '',
    name: '',
    identification: '',
  },
};

const Checkout: React.FC<CheckoutInterface> = () => {
  const [data, setData] = useState<Data>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (
      e.target.name === 'email' ||
      e.target.name === 'name' ||
      e.target.name === 'identification'
    ) {
      setData({
        ...data,
        customer: { ...data.customer, [e.target.name]: e.target.value },
      });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    generateLink();
  };

  const generateLink = async () => {
    const result = await API.post('checkout', data);
    window.open(result.data.data.checkout_url, '_self');
  };
  return (
    <>
      <Container maxWidth='md'>
        <Typography variant='h5' sx={{ m: 2 }}>
          Checkout
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl
            sx={{
              display: 'flex',
              mt: 10,
              gap: 1,
            }}
          >
            <TextField
              type='text'
              label='Total a pagar'
              placeholder='Ingrese el monto a pagar'
              onChange={handleChange}
              name='total'
              value={data.total}
            />
            <TextField
              type='text'
              label='Descripción'
              placeholder='Ingrese la descripción'
              onChange={handleChange}
              name='description'
              value={data.description}
            />
            <TextField
              type='text'
              label='name'
              placeholder='Ingrese el nombre de titular'
              onChange={handleChange}
              name='name'
              value={data.customer.name}
            />
            <TextField
              type='email'
              label='Email'
              placeholder='Ingrese el email'
              onChange={handleChange}
              name='email'
              value={data.customer.email}
            />
            <TextField
              type='text'
              label='DNI'
              placeholder='Ingrese el DNI'
              onChange={handleChange}
              name='identification'
              value={data.customer.identification}
            />
            <Button type='submit' variant='contained'>
              Ir a pagar
            </Button>
          </FormControl>
        </form>
      </Container>
    </>
  );
};

export default Checkout;
