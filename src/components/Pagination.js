//REACT
import React from "react";

//MATERIAL UI
import { Box, Pagination } from "@mui/material";

//COMPONENTE "PAGINATION_CARDS"
//EL SGTE. COMPONENTE RETORNA UN PAGINADOR PARA TENER AL ALCANCE TODOS LOS PERSONAJES QUE RETORNE LA CONSULTA A LA API
const PaginationCards = ({ count, handleChangePagination }) => {
  return (
    <Box
      component="div"
      display="flex"
      justifyContent="right"
      width="100%"
      pt={5}
    >
      <Pagination
        defaultValue={1}
        count={count}
        variant="outlined"
        shape="rounded"
        sx={{backgroundColor: 'primary'}}
        onChange={(e) => handleChangePagination(e.target.textContent)}
      />
    </Box>
  );
};

export default PaginationCards;
