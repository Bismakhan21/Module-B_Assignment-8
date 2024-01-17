import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2} sx={{display:"flex", flexWrap:'wrap', margin:'30px 5px', padding:'5px'}}>
   
      <Avatar sx={{width:'100px', height:'130px'}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/8ab98e10-213b-4fb4-aa0b-57486004d385.png?format=avif" />
      
      <Avatar sx={{width:'100px', height:'120px'}} alt="" src="https://f.nooncdn.com/mpcms/EN0002/assets/a5884f12-be40-42dd-b2fb-7cd9d79a1d3a.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}}  alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/01d8ac5f-4261-4c45-a9b6-374aa31b238a.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/a6e14846-623a-4ed5-8e3d-1705a491b9cc.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/86978110-e5bb-4567-842d-f4dc717e0828.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/1cc83895-64fd-4482-ab22-84b1483de32b.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/83a59a7b-4603-4935-84c9-afcd5e076369.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/a71119dd-b63b-47d4-a25b-123a0b944310.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/5e6e22ae-2590-403e-9566-5d6697333b04.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/19f434cf-6cc9-4679-a778-8477c529fc39.png?format=avif" />
      <Avatar sx={{width:'100px', height:'125px',}} alt="" src="https://f.nooncdn.com/mpcms/EN0001/assets/8c18303a-e243-4451-b620-bb02dbf0e906.png?format=avif" />
    </Stack>
  );
}