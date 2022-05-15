//REACT
import React from "react";

//MATERIAL UI
import { Box, Typography } from "@mui/material";

//IMG
import RickAndMortyxHOUM from "../assets/imgs/RickAndMortyXHOUM.png";

//COMPONENTE "NOT_FOUND_CHARACTERS"
//EL SGTE. COMPONENTE RETORNA UN CONTENEDOR CON TEXTOS E IMAGEN INDICANDO QUE NO SE ENCONTRARON PERSONAJES VINCULADOS A LOS FILTROS SELECCIONADOS.
const NotFoundCharacters = () => {
  return (
    <Box component="div" textAlign="center" width="100%" padding={5}>
      <Typography variant="h3" mb={4}>
        No characters were found with the selected filters.
      </Typography>
      <Box component="img" src={RickAndMortyxHOUM} width="70%" mb={4}></Box>
      <Typography variant="h3">Try filtering by other parameters.</Typography>
    </Box>
  );
};

export default NotFoundCharacters;
