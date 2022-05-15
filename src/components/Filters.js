import React from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
