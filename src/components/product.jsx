import React from 'react'
import { Product_Card } from "./productcard";
import { Container, Stack } from '@mui/material';
import { Grid } from "@mui/material";

const products_arr = [
    {
      img_url:
        "https://f.nooncdn.com/p/v1686132033/N53347034A_1.jpg?format=avif&width=240",
     rating: 4.4,
      title: "Aphone iphone 14 pro max 512GB Silver",
      dis_price: 5280,
      orignal_price: 5949,
      sold: 'Only 1 left in stock',
    },
    {
      img_url:
      "https://f.nooncdn.com/p/v1686205684/N50863792A_1.jpg?format=avif&width=240",
      rating: 4.6,
        title: "Apple iPad 2021 (9th Generation)",
        dis_price: 2255,
        orignal_price: 2549,
        sold: 'Selling out fast',
    },
    {
        img_url:
          "https://f.nooncdn.com/p/v1686132033/N53347034A_1.jpg?format=avif&width=240",
       rating: 4.4,
        title: "Aphone iphone 14 pro max 512GB Silver",
        dis_price: 5280,
        orignal_price: 5949,
        sold: 'Only 1 left in stock',
      },
      {
        img_url:
        "https://f.nooncdn.com/p/v1686205684/N50863792A_1.jpg?format=avif&width=240",
        rating: 4.6,
          title: "Apple iPad 2021 (9th Generation)",
          dis_price: 2255,
          orignal_price: 2549,
          sold: 'Selling out fast',
      },
      {
        img_url:
          "https://f.nooncdn.com/p/v1686132033/N53347034A_1.jpg?format=avif&width=240",
       rating: 4.4,
        title: "Aphone iphone 14 pro max 512GB Silver",
        dis_price: 5280,
        orignal_price: 5949,
        sold: 'Only 1 left in stock',
      },
      {
        img_url:
        "https://f.nooncdn.com/p/v1686205684/N50863792A_1.jpg?format=avif&width=240",
        rating: 4.6,
          title: "Apple iPad 2021 (9th Generation)",
          dis_price: 2255,
          orignal_price: 2549,
          sold: 'Selling out fast',
      },
      {
        img_url:
          "https://f.nooncdn.com/p/v1686132033/N53347034A_1.jpg?format=avif&width=240",
       rating: 4.4,
        title: "Aphone iphone 14 pro max 512GB Silver",
        dis_price: 5280,
        orignal_price: 5949,
        sold: 'Only 1 left in stock',
      },
      {
        img_url:
        "https://f.nooncdn.com/p/v1686205684/N50863792A_1.jpg?format=avif&width=240",
        rating: 4.6,
          title: "Apple iPad 2021 (9th Generation)",
          dis_price: 2255,
          orignal_price: 2549,
          sold: 'Selling out fast',
      },
      {
        img_url:
          "https://f.nooncdn.com/p/v1686132033/N53347034A_1.jpg?format=avif&width=240",
       rating: 4.4,
        title: "Aphone iphone 14 pro max 512GB Silver",
        dis_price: 5280,
        orignal_price: 5949,
        sold: 'Only 1 left in stock',
      },
  ];

 function Product() {
    return (
    <>
    <h2 style={{marginLeft:'30px', marginBottom:'30px',}}>
     Curated for you
    </h2>

    <Container sx={{display:'flex', justifyContent:'start', paddingTop:'10px',}}>
      {/* <Grid container> */}
        {products_arr.map((current_obj, index) => {
          return (
            // <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={3}>
             <Stack key={index} item sx={{minWidth:'30%', paddingTop:'10px',   marginRight:'0',}}> 
               <Product_Card
                //   img_url, title, rating, sold, dis_price, original_price
                card_data={current_obj}
               />
                {/* </Grid> */}
             </Stack>
          );
        })}
            </Container>
      {/* </Grid> */}
    </>
  );
};

export default Product;