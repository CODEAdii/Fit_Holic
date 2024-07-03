import React from 'react';
import { Box, Stack, Typography, Link, Button } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Stack direction="row" justifyContent="center" mt="41px" pb="40px">
      <Button component={Link} href="https://github.com/Lindelof" target="_blank" rel="noopener noreferrer">
        <img src="https://github.com/favicon.ico" alt="GitHub" style={{ width: '20px', height: '20px' }} />
      </Button>
      <Button component={Link} href="https://www.linkedin.com/in/lindelof/" target="_blank" rel="noopener noreferrer">
        <img src="https://static.linkedin.com/favicon.ico" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
      </Button>
    </Stack>
  </Box>
);

export default Footer;