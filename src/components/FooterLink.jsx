/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const preventDefault = (event) => event.preventDefault();

export default function UnderlineLink() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        margin: '30px',
        typography: 'body1',
        '& > :not(style) ~ :not(style)': {
          ml: 2,
          color: '#404553',
        },
      }}
      onClick={preventDefault}
    >
      
      <Link href="#" underline="hover">
        {'Careers'}
      </Link>
      <Link href="#" underline="hover">
        {'Warranty Policy'}
      </Link>
      <Link href="#" underline="hover">
        {'Sell with us'}
      </Link>
      <Link href="#" underline="hover">
        {'Terms of Use'}
      </Link>
      <Link href="#" underline="hover">
        {'Terms of sale'}
      </Link>
      <Link href="#" underline="hover">
        {'Privacy Policy'}
      </Link>
      <Link href="#" underline="hover">
        {'Consumer Rights'}
      </Link>
      
    </Box>
  );
}