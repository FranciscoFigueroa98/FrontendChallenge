import React from "react";
import { Box, Pagination } from "@mui/material";

const PaginationCards = ({ count, handleChangePagination }) => {
  return (
    <Box
      component="div"
      sx={{ width: "100%", display: "flex", justifyContent: "right", pt: 2 }}
    >
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={(e) => handleChangePagination(e.target.textContent)}
      />
    </Box>
  );
};

export default PaginationCards;
