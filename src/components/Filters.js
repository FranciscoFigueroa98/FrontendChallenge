//REACT
import React from "react";

//MATERIAL UI
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

//ARREGLO DE OBJETOS "GENDER ITEMS"
//CONTIENE LOS GÉNEROS A ITERAR EN FILTRO GENDER
const genderItems = [
  {
    value: "",
  },
  {
    value: "male",
  },
  {
    value: "female",
  },
  {
    value: "genderless",
  },
  {
    value: "unknown",
  },
];

//ARREGLO DE OBJETOS "SPECIES ITEMS"
//CONTIENE LAS ESPECIES A ITERAR EN FILTRO SPECIES
const speciesItems = [
  {
    value: "",
  },
  {
    value: "human",
  },
  {
    value: "humanoid",
  },
  {
    value: "animal",
  },
  {
    value: "alien",
  },
  {
    value: "disease",
  },
  {
    value: "mythological creature",
  },
  {
    value: "robot",
  },
];

//ARREGLO DE OBJETOS "STATUS ITEMS"
//CONTIENE LOS ESTADOS A ITERAR EN FILTRO STATUS
const statusItems = [
  {
    value: "",
  },
  {
    value: "alive",
  },
  {
    value: "dead",
  },
  {
    value: "unknown",
  },
];

//COMPONENTE "FILTERS"
//EL SGTE. COMPONENTE RETORNA LOS FILTROS POR GÉNERO, ESTADO Y ESPECIE. ADEMÁS RECIBE EL VALOR SELECCIONADO Y LA FUNCIÓN CORRESPONDIENTE AL CAMBIAR LA OPCIÓN DE CADA FILTRO.
const Filters = ({
  gender,
  handleChangeGender,
  species,
  handleChangeSpecies,
  status,
  handleChangeStatus,
}) => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            labelId="gender"
            id="gender"
            value={gender}
            label="Gender"
            onChange={handleChangeGender}
          >
            {genderItems.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                sx={{ height: "4vh" }}
              >
                <Typography sx={{ textTransform: "capitalize" }}>
                  {item.value === "" ? "All" : item.value}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel>Species</InputLabel>
          <Select
            labelId="species"
            id="species"
            value={species}
            label="Species"
            onChange={handleChangeSpecies}
          >
            {speciesItems.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                sx={{ height: "4vh" }}
              >
                <Typography sx={{ textTransform: "capitalize" }}>
                  {item.value === "" ? "All" : item.value}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            labelId="status"
            id="status"
            value={status}
            label="Status"
            onChange={handleChangeStatus}
          >
            {statusItems.map((item) => (
              <MenuItem
                key={item.value}
                value={item.value}
                sx={{ height: "4vh" }}
              >
                <Typography sx={{ textTransform: "capitalize" }}>
                  {item.value === "" ? "All" : item.value}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default Filters;
