//REACT
import React from "react";

//MATERIAL UI
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

//COMPONENTES IMPORTADOS
import ButtonMoreInformation from "./Button";

//COMPONENTE "HERO_CARD"
//EL SGTE. COMPONENTE RETORNA UNA TARJETA CON TODA LA INFORMACIÓN RELACIONADA DE CADA PERSONAJE
//(IMAGEN, NOMBRE, GÉNERO, ESPECIE, ESTADO, LOCALIZACIÓN Y CANTIDAD DE APARICIONES EN LA SERIE).

const HeroCard = ({ character }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ minHeight: "640px" }}>
        <CardMedia
          component="img"
          image={character.image}
          alt={"Image of " + character.name}
          sx={{ minHeight: "300px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" textAlign="center">
            {character.name}
          </Typography>
          <Typography variant="body1">Gender: {character.gender}</Typography>
          <Typography variant="body1">Species: {character.species}</Typography>
          <Typography variant="body1">Status: {character.status}</Typography>
          <Typography variant="body1">
            Location: {character.location.name}
          </Typography>
          <Typography variant="body1" sx={{ paddingBottom: "1rem" }}>
            Shares: {character.episode.length + ` episodes`}
          </Typography>
          <ButtonMoreInformation character={character.name} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default HeroCard;
