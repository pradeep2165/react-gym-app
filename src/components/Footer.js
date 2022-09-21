import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "../assets/assets/images/Logo-1.png";
const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="48px" pt="24px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h5" pb="40px" mt="40px">
          Made by pradeep With help of JM
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
