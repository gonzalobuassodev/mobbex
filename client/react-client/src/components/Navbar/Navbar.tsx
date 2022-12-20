import {
  Box,
  FormGroup,
  FormControlLabel,
  Switch,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material';
import React from 'react';
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Payments
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
