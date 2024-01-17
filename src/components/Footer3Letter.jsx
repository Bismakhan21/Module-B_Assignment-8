import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { yellow } from '@mui/material/colors';
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

export default function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2} >
      <Avatar sx={{ bgcolor: yellow[500], color:'blueviolet',}}><GrFacebookOption /></Avatar>
      <Avatar sx={{ bgcolor: yellow[500], color:'blueviolet',}}><FaTwitter /></Avatar>
      <Avatar sx={{ bgcolor: yellow[500], color:'blueviolet',}}><FaInstagram /></Avatar>
      <Avatar sx={{ bgcolor: yellow[500], color:'blueviolet',}}><FaLinkedinIn /></Avatar>

    </Stack>
  );
}