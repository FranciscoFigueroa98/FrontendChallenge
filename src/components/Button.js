import React from "react";
import { Button } from "@mui/material";

const ButtonMoreInformation = ({ character }) => {
  const sendToWiki = (selectedCharacter) => {
    if (selectedCharacter) {
      const characterName = selectedCharacter.replace(/\s/g, "_");
      window.location.href = `https://rickandmorty.fandom.com/wiki/${characterName}`;
    }
  };

  return (
    <Button
      variant="contained"
      onClick={() => sendToWiki(character)}
      sx={{ borderRadius: "1rem" }}
    >
      More Information
    </Button>
  );
};

export default ButtonMoreInformation;
