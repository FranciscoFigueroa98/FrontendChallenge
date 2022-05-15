import React from "react";
import { Box, Typography } from "@mui/material";

//imagen
import RickAndMortyxHOUM from "../assets/imgs/RickAndMortyXHOUM.png";

const NotFoundCharacters = () => {
  return (
    <Box component="div" textAlign="center" sx={{ width: "100%", padding: '1rem' }}>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "4vh",
        }}
      >
        No characters were found with the selected filters.
      </Typography>
      <Box
        component="img"
        src={RickAndMortyxHOUM}
        sx={{ width: "40%", marginBottom: "4vh" }}
      ></Box>
      <Typography variant="h3">Try filtering by other parameters.</Typography>
    </Box>
  );
};

export default NotFoundCharacters;
