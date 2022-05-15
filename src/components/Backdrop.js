//REACT
import React from "react";

//MATERIAL UI
import { Backdrop, CircularProgress } from "@mui/material";

//COMPONENTE "LOADING"
//EL SGTE. COMPONENTE RETORNA UNA PANTALLA DE CARGA QUE SERÁ ACTIVADA AL MOMENTO DE HACER LA CONSULTA A LA API DE LA APLICACIÓN Y DEVOLVER LOS RESULTADOS OBTENIDOS
const Loading = ({ open }) => {
  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <CircularProgress />
    </Backdrop>
  );
};

export default Loading;
