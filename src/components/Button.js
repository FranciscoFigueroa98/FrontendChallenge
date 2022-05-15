//REACT
import React from "react";

//MATERIAL UI
import { Box, Button } from "@mui/material";

//COMPONENTE "BUTTON_MORE_INFORMATION"
//EL SGTE. COMPONENTE RETORNA UN BOTÓN UBICADO EN CADA HERO CARD.
//LA LABOR DE ESTE COMPONENTE ES RECIBIR UN PERSONAJE DE LA SERIE PARA REDIRECCIONAR A UN SITIO QUE CONTIENE INFORMACIÓN MÁS DETALLADA DEL MISMO
const ButtonMoreInformation = ({ character }) => {
  
  //FUNCIÓN "SEND_TO_WIKI"
  //ENCARGADA DE ENVIAR AL USUARIO A LA WIKI DEL FANDOM DE RICK AND MORTY PARA ENTREGAR INFORMACIÓN MÁS AL DETALLE DEL PERSONAJE SELECCIONADO
  const sendToWiki = (selectedCharacter) => {
    if (selectedCharacter) {
      const characterName = selectedCharacter.replace(/\s/g, "_");
      window.location.href = `https://rickandmorty.fandom.com/wiki/${characterName}`;
    }
  };

  return (
    <Box component="div" textAlign="center">
      <Button
        variant="contained"
        onClick={() => sendToWiki(character)}
        sx={{ borderRadius: "1rem" }}
      >
        More Information
      </Button>
    </Box>
  );
};

export default ButtonMoreInformation;
