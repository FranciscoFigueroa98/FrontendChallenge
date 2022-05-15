
//REACT
import React from "react";

//MATERIAL UI
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

//COMPONENTE "BAR"
//EL SGTE. COMPONENTE RETORNA UNA BARRA CENTRADA EN EL HEADER DE NUESTRO PROYECTO
const Bar = () => {
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

export default Bar;
