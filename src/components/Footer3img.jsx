import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Footer3Letter from './Footer3Letter';

export default function ImageAvatars() {
  return (
    <Stack sx={{ display: 'flex', flexDirection:'row', gap: 2, flexWrap: 'wrap',justifyContent:'space-around', padding:'10px 30px', marginBottom:'30px', }}>
    
    <Stack sx={{gap:2, flexDirection:'column', textAlign:'center', }}> 
    
    <h4>CONNECT WITH US</h4>
        <Stack direction="row" spacing={2}>

      <Avatar sx={{borderRadius:'0', width:'180px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg" />
      <Avatar sx={{borderRadius:'0', width:'180px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg" />
      <Avatar sx={{borderRadius:'0', width:'180px', background:'transparent',}} alt="" src="https://f.nooncdn.com/s/app/com/noon/images/Huawei-icon.png" />

        </Stack>
 </Stack>
    
    <Stack sx={{gap:1, flexDirection:'column', textAlign:'center', }}> 
      <h4>CONNECT WITH US</h4>
        <Footer3Letter />
    </Stack>
    </Stack>
  );
}