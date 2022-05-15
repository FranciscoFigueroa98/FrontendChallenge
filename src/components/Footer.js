//REACT
import React from "react";

//MATERIAL UI
import { Box, Typography } from "@mui/material";

//COMPONENTE "FOOTER"
//EL SGTE. COMPONENTE RETORNA UNA BARRA CENTRADA EN EL FOOTER DE NUESTRO PROYECTO
const Footer = () => {
  return (
    <Box component="div" textAlign="center" pb={3} pt={3} mb={0} sx={{ backgroundColor: "#424242" }}>
      <Typography variant="h6" color="#FFFFFF">
        Web development carried out by Francisco Figueroa.
      </Typography>
    </Box>
  );
};

export default Footer;
