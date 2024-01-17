import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatar() {
  return (
    <Stack direction="row" spacing={1} sx={{display:'flex', justifyContent:'start', margin:'30px', flexWrap:'wrap',}}>
      <Avatar sx={{borderRadius:'0', paddingBottom:'2px', width:'420px', height:'50px', background:'transparent',}} alt="Remy Sharp" src="https://f.nooncdn.com/mpcms/EN0001/assets/b24fdcc1-4e78-44f9-8d45-6f95065e6345.png?format=avif" />
      <Avatar sx={{borderRadius:'0', paddingBottom:'2px', width:'420px', height:'50px', background:'transparent',}} alt="Travis Howard" src="https://f.nooncdn.com/mpcms/EN0001/assets/ffa47619-d64a-4ed3-ba3c-71e6ebff04f1.png?format=avif" />
      <Avatar sx={{borderRadius:'0', paddingBottom:'2px', width:'420px', height:'50px', background:'transparent',}} alt="Cindy Baker" src="https://f.nooncdn.com/mpcms/EN0001/assets/4c72b92d-6ae8-48bf-8ab0-f7f06cb43156.png?format=avif" />
    </Stack>
  );
}