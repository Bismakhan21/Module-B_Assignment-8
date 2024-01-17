import * as React from "react";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import { IoBagAdd } from "react-icons/io5";

function Product_Card(props) {
  const { img_url, title, rating, sold, dis_price, orignal_price } =
    props.card_data;
  return (
    <Card sx={{ maxWidth: "60%", border:'1px solid #eee', marginBottom:'15px', marginRight:'0px'  }}>
      <CardMedia sx={{ height: '220px',padding:'10px', }} image={img_url} title="" />
      <CardContent>
      <Stack flexDirection="row" gap={3} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            Rating: {rating}
          </Typography>
        </Stack>

        <Typography gutterBottom variant="h5" component="div" fontSize='18px'>
          {title}
        </Typography>

        <Stack flexDirection="row" gap={2} alignItems="start" >
          <Typography fontSize='20px'>AED. {dis_price}</Typography>

          <Typography sx={{ textDecorationLine: "line-through", fontSize:'16px', }}>
            AED. {orignal_price}
          </Typography>
        </Stack>
        <Stack>
        <Typography variant="body2" color="text.secondary">
        <IoBagAdd /> {sold}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export { Product_Card };