import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Checkout, Customer } from '../interfaces/checkout.interface';
import { ItemCheckout } from '../ItemCheckout';
import API from '../../utils/api';

export interface ListCheckoutInterface {}

const customer: Customer = {
  name: '',
  email: '',
  identification: '',
};

const initdata: Checkout[] = [
  {
    id: '',
    reference: '',
    currency: '',
    customer: customer,
    description: '',
    status: '',
    total: 0,
  },
];

const ListCheckout: React.FC<ListCheckoutInterface> = () => {
  const [data, setData] = useState<Checkout[]>(initdata);

  useEffect(() => {
    const getCheckout = async () => {
      const result = await API.get('checkout');
      setData(result.data.data);
    };

    getCheckout();
  }, []);

  return (
    <Container maxWidth='md'>
      <Typography variant='h5' sx={{ m: 2 }}>
        Checkout List
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Reference</TableCell>
              <TableCell align='left'>Description</TableCell>
              <TableCell align='left'>Currency</TableCell>
              <TableCell align='left'>Total</TableCell>
              <TableCell align='left'>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {row.reference}
                </TableCell>
                <TableCell align='left'>{row.description}</TableCell>
                <TableCell align='left'>{row.currency}</TableCell>
                <TableCell align='left'>{row.total}</TableCell>
                <TableCell align='left'>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ListCheckout;
