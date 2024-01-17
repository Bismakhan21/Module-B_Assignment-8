import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack, Typography } from '@mui/material';

const itemData3 = [
    {
      img: 'https://f.nooncdn.com/mpcms/EN0001/assets/26b5ab14-2596-473a-b1e6-411903ebcb44.png?format=avif',
      title: '',
    },
    {
      img: 'https://f.nooncdn.com/mpcms/EN0001/assets/1b352827-1fc9-40cd-8d51-4f0b28b8f389.png?format=avif',
      title: '',
    },
]

const itemData2 = [
    {
      img: 'https://f.nooncdn.com/products/tr:n-t_240/pnsku/N70020847V/45/_/1698930155/640da032-9952-4e34-88b5-80f4711cbe63.jpg',
      title: '',
    },
    {
      img: 'https://f.nooncdn.com/products/tr:n-t_240/pnsku/N53437240A/45/_/1694760182/fef39d70-943d-4962-a62b-f09196c604ab.jpg',
      title: '',
    },
    {
      img: 'https://f.nooncdn.com/products/tr:n-t_240/pzsku/Z6520654951A4D595739CZ/45/_/1666972694/db7456fe-ffce-474d-9b40-89bcbf0dd603.jpg',
      title: '',
    },
    {
      img: 'https://f.nooncdn.com/products/tr:n-t_240/pzsku/ZB01B36BA5C7C53A0F44FZ/45/_/1695817125/a67929ed-a2c8-4762-90c3-e7b36a32c8d4.jpg',
      title: '',
    },
]

const itemData = [
    {
      img: 'https://f.nooncdn.com/mpcms/EN0001/assets/904ce502-9090-47e5-a65b-c220f0570e49.png?format=avif',
      title: '',
    },
    {
      img: 'https://f.nooncdn.com/mpcms/EN0001/assets/9f856ffd-3a2e-4efd-bd9f-a7619d786e41.png?format=avif',
      title: '',
    },
    {
      img: 'https://f.nooncdn.com/mpcms/EN0001/assets/78d6564f-25d9-4513-ad82-041e0b281f9f.png?format=avif',
      title: '',
    },
    {
      img: 'https://f.nooncdn.com/mpcms/EN0001/assets/390764b1-df36-4b16-aad8-36389bd7cdd1.png?format=avif',
      title: '',
    },
]

function Deals () {
  return (
    
  <>
   <Typography sx={{display:'flex', flexDirection:'row',}}>
        <ImageList sx={{ width: 450, height: 450 , border:'2px solid #eee', padding:'5px', marginBottom:'20px',}} cols={2} rowHeight={164}>
           
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
   
    </ImageList>

    <ImageList sx={{ width: 450, height: 450 , border:'2px solid #eee', padding:'5px', marginBottom:'20px', overflowY:'hidden'}} cols={2} rowHeight={164}>
      {itemData2.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    <ImageList sx={{ width: 450, height: 450 , border:'2px solid #eee', padding:'5px', marginBottom:'20px', overflowY:'hidden'}} cols={1} rowHeight={164}>
      {itemData3.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
   
    </Typography>
</>
  )
}

export default Deals;