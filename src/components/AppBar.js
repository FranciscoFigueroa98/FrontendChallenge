import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Frontend Challenge</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
