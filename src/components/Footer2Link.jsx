import * as React from 'react';
import Link from '@mui/joy/Link';
import { Stack } from '@mui/material';

export default function LinkUnderline() {
  return (
    <Stack sx={{ display: 'flex', flexDirection:'row', gap: 2, flexWrap: 'wrap',justifyContent:'space-around', padding:'10px 30px', }}>
      <Stack sx={{gap:1, flexDirection:'column',  marginBottom:'20px',}} className='Footer-link'> 
        <h4>ELECTRONICS</h4>
    
      <Link sx={{color:'#404553',}} href="#underline" underline="none">
        Mobile
      </Link>
      <Link href="#underline" underline="none">
       Tablets
      </Link>
      <Link href="#underline" underline="none">
        Laptops
      </Link>
      <Link href="#underline" underline="none">
        Home Appliances
      </Link>
      <Link href="#underline" underline="none">
        Camera, Photo & Video
      </Link>
      <Link href="#underline" underline="none">
        Television
      </Link>
      <Link href="#underline" underline="none">
        Headphones
      </Link>
      <Link href="#underline" underline="none">
        Video Games
      </Link>
      <Link href="#underline" underline="none">
        Best Mobile Phones
      </Link>
      </Stack>


      <Stack sx={{gap:1,}}> 
        <h4>FASHION</h4>
      <Link href="#underline" underline="none">
        Women's Fashion
      </Link>
      <Link href="#underline" underline="none">
      Men's Fashion
      </Link>
      <Link href="#underline" underline="none">
     Girl's Fashion
      
      </Link>
      <Link href="#underline" underline="none">
      Boys's Fashion
      
      </Link>
      <Link href="#underline" underline="none">
        Watches
      </Link>
      <Link href="#underline" underline="none">
        Jewellery
      </Link>
      <Link href="#underline" underline="none">
      Womens's Handbags
      </Link>
      <Link href="#underline" underline="none">
        Mens's Eyewear
      </Link>
      </Stack>

      <Stack sx={{gap:1, flexDirection:'column'}}> 
        <h4>HOME AND KITCHEN</h4>
      <Link href="#underline" underline="none">
        Bath
      </Link>
      <Link href="#underline" underline="none">
       Home Decor
      </Link>
      <Link href="#underline" underline="none">
        Kitchen &Dining
      </Link>
      <Link href="#underline" underline="none">
        Tools & Home Improvement
      </Link>
      <Link href="#underline" underline="none">
       Audio & Video
      </Link>
      <Link href="#underline" underline="none">
       Furniture
      </Link>
      <Link href="#underline" underline="none">
       Patio, Lawn & Garden
      </Link>
      <Link href="#underline" underline="none">
       Pet Supplies
      </Link>
      </Stack>

      <Stack sx={{gap:1, flexDirection:'column'}}> 
        <h4>BEAUTY</h4>
      <Link href="#underline" underline="none">
        Fragnace
      </Link>
      <Link href="#underline" underline="none">
       Make-Up
      </Link>
      <Link href="#underline" underline="none">
        Haircare
      </Link>
      <Link href="#underline" underline="none">
        Skincare
      </Link>
      <Link href="#underline" underline="none">
       Bath & Body
      </Link>
      <Link href="#underline" underline="none">
       Electronic Beauty Tools
      </Link>
      <Link href="#underline" underline="none">
       Men's Grooming
      </Link>
      <Link href="#underline" underline="none">
       Health Care Essentials
      </Link>
      
      </Stack>

      <Stack sx={{gap:1, flexDirection:'column'}}> 
        <h4>BABY & TOYS</h4>
      <Link href="#underline" underline="none">
        Diapering
      </Link>
      <Link href="#underline" underline="none">
       Baby Transport
      </Link>
      <Link href="#underline" underline="none">
        Nursing & Feeding
      </Link>
      <Link href="#underline" underline="none">
        Baby & Toddler Toys
      </Link>
      <Link href="#underline" underline="none">
       Tricycle & Scooters
      </Link>
      <Link href="#underline" underline="none">
       Board Game & Cards
      </Link>
      <Link href="#underline" underline="none">
       Outdoor Play
      </Link>
      </Stack>

      <Stack sx={{gap:1, flexDirection:'column'}}> 
        <h4>TOP BRANDS</h4>
      <Link href="#underline" underline="none">
        Pampers
      </Link>
      <Link href="#underline" underline="none">
       Apple
      </Link>
      <Link href="#underline" underline="none">
        Nike
      </Link>
      <Link href="#underline" underline="none">
        Samsung
      </Link>
      <Link href="#underline" underline="none">
       Tefal
      </Link>
      <Link href="#underline" underline="none">
       L'Oreal Paris
      </Link>
      <Link href="#underline" underline="none">
       Skechers
      </Link>
      <Link href="#underline" underline="none">
       BLACK+DECKER
      </Link>
      <Link href="#underline" underline="none">
        Saudi Pro League
      </Link>
      </Stack>

      <Stack sx={{gap:1, flexDirection:'column'}}> 
        <h4>DAILY GROCERIES</h4>
      <Link href="#underline" underline="none">
        Fresh Produce
      </Link>
      <Link href="#underline" underline="none">
       Dairy & Eggs
      </Link>
      <Link href="#underline" underline="none">
      Bread & Bakery
      </Link>
      <Link href="#underline" underline="none">
        Maet & Seafood
      </Link>
      <Link href="#underline" underline="none">
       Breakfast Food
      </Link>
      <Link href="#underline" underline="none">
       Pantry Staples
      </Link>
      <Link href="#underline" underline="none">
       Household Supplies
      </Link>
      <Link href="#underline" underline="none">
       Personal Care
      </Link>
      </Stack>

    </Stack>

  );
}

