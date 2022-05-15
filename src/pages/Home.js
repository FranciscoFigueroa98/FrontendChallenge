import React, { useState, useEffect } from "react";

//material ui
import {
  Grid,
  Box,
} from "@mui/material";

//sweet alert
import Swal from "sweetalert2";

//configuración axios
import axiosClient from "../config/axios";

//componentes
import Loading from "../components/Backdrop";
import Filters from "../components/Filters";
import PaginationCards from "../components/Pagination";
import NotFoundCharacters from "../components/NotFoundCharacters";
import HeroCard from "../components/HeroCard";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [count, setCount] = useState(0);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosClient
      .get("character?page=1")
      .then((response) => {
        let charactersRickAndMorty =
          response.data && response.data.results.length > 0
            ? response.data.results
            : [];

        let pages =
          response.data && Object.keys(response.data.info).length > 0
            ? response.data.info.pages
            : {};

        setLoading(false);
        setCharacters(charactersRickAndMorty);
        setCount(pages);
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          confirmButtonColor: "#ff5000",
        });
      });
  }, []);

  const filterCharacters = (category, value) => {
    setLoading(true);
    let url;

    switch (category) {
      case "gender":
        url = `character?page=1&${category}=${value}&species=${species}&status=${status}`;
        break;
      case "species":
        url = `character?page=1&${category}=${value}&gender=${gender}&status=${status}`;
        break;
      case "status":
        url = `character?page=1&${category}=${value}&species=${species}&gender=${gender}`;
        break;
      default:
        url = "character";
    }

    axiosClient
      .get(url)
      .then((response) => {
        let charactersRickAndMorty =
          response.data && response.data.results.length > 0
            ? response.data.results.slice(0, 12)
            : [];

        let pages =
          response.data && Object.keys(response.data.info).length > 0
            ? response.data.info.pages
            : {};

        setLoading(false);
        setCharacters(charactersRickAndMorty);
        setCount(pages);
      })
      .catch(() => {
        setLoading(false);
        setCharacters([]);
        setCount(0);
      });
  };

  const handleChangeGender = (event) => {
    filterCharacters("gender", event.target.value);
    setGender(event.target.value);
  };

  const handleChangeSpecies = (event) => {
    filterCharacters("species", event.target.value);
    setSpecies(event.target.value);
  };

  const handleChangeStatus = (event) => {
    filterCharacters("status", event.target.value);
    setStatus(event.target.value);
  };

  const handleChangePagination = (page) => {
    setLoading(true);
    let url = `character?page=${page}&gender=${gender}&species=${species}&status=${status}`;
    axiosClient
      .get(url)
      .then((response) => {
        let charactersRickAndMorty =
          response.data && response.data.results.length > 0
            ? response.data.results
            : [];

        setLoading(false);
        setCharacters(charactersRickAndMorty);
      })
      .catch((error) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  return (
    <Box component="div">
      <Filters
        gender={gender}
        handleChangeGender={handleChangeGender}
        species={species}
        handleChangeSpecies={handleChangeSpecies}
        status={status}
        handleChangeStatus={handleChangeStatus}
      />

      <Grid container spacing={3} sx={{ paddingTop: "2rem" }}>
        {characters.length ? (
          <>
            {characters.map((character) => (
              <HeroCard character={character} key={`GridItem-${character.id}`} />
            ))}

            <PaginationCards
              count={count}
              handleChangePagination={handleChangePagination}
            />
          </>
        ) : (
          <>
            <NotFoundCharacters />
          </>
        )}
      </Grid>

      <Loading open={loading} />
    </Box>
  );
};

export default Home;
