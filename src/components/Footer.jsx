import React from 'react'
import FooterPayment from './FooterPayment';
import FooterLink from './FooterLink';
import { Stack } from '@mui/material';
import Footer2Link from './Footer2Link';
import Footer3img from './Footer3img';


function Footer() {
  return (
    <>
    <Stack>
     <Footer2Link />
     <Footer3img />

    </Stack>
    <Stack sx={{background:'#eee',}}>
        <Stack sx={{paddingLeft:'30px',paddingTop:'30px',display:'flex',}}>
            <p>© 2024 noon. All Rights Reserved</p>
        </Stack>
        <FooterPayment />
        <FooterLink />
    </Stack>
    </>
  )
}

export default Footer