import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
// import Box from '@mui/joy/Box';
import { Stack } from '@mui/material';

export default function ImageAvatars() {
  return (
    <Stack sx={{ display: 'flex', 
    flexDirection:'row', 
    justifyContent:'end', 
    marginRight:'40px',
    flexWrap:'wrap', 
     gap: 2,}}>
        
        
      <Avatar sx={{borderRadius:'0', width:'60px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-mastercard.svg" />
      <Avatar sx={{borderRadius:'0', width:'60px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-visa.svg" />
      <Avatar sx={{borderRadius:'0', width:'60px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tabby_v2.svg" />
      <Avatar sx={{borderRadius:'0', width:'60px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/tamara-en.svg" />
      <Avatar sx={{borderRadius:'0', width:'60px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/card-amex.svg" />
      <Avatar sx={{borderRadius:'0', width:'60px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/noon/design-system/payment-methods-v2/cod-en.svg" />

    </Stack>
  );
}
