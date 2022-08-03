//REACT
import React, { useState, useEffect } from "react";

//MATERIAL UI
import { Grid, Box } from "@mui/material";

//SWEET ALERT
import Swal from "sweetalert2";

//CLIENTE AXIOS
import axiosClient from "../config/axios";

//COMPONENTES IMPORTADOS
import Loading from "../components/Backdrop";
import Filters from "../components/Filters";
import PaginationCards from "../components/Pagination";
import NotFoundCharacters from "../components/NotFoundCharacters";
import HeroCard from "../components/HeroCard";

//COMPONENTE HOME
//EL SGTE. COMPONENTE ES NUESTRO COMPONENTE PADRE QUE CONTIENE TODA LA LÓGICA NECESARIA PARA QUE LA INFORMACIÓN DE LOS PERSONAJES SE VISUALICE EXITOSAMENTE, EN EL FORMATO SOLICITADO.
//ADEMÁS CONTIENE LAS FUNCIONALIDADES PARA QUE EL PAGINADOR Y LOS FILTROS FUNCIONEN DEBIDAMENTE.

const Home = () => {
  //VARIABLES A UTILIZAR
  const [characters, setCharacters] = useState([]);
  const [notFoundCharacters, setNotFoundCharacters] = useState(false);
  const [count, setCount] = useState(0);
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //AL ENTRAR AL SITIO SE VISUALIZARÁ LA PANTALLA DE CARGA HASTA QUE RECIBAMOS RESPUESTA DE LA API
    setLoading(true);
    axiosClient
      .get("character?page=1")
      .then((response) => {
        //AL RECIBIR LA RESPUESTA VAMOS A VALIDAR SI VIENE LA INFORMACIÓN DE LOS PERSONAJES PARA MOSTRAR EN LAS HERO CARD
        let charactersRickAndMorty =
          response.data && response.data.results.length > 0
            ? response.data.results
            : [];

        //TAMBIÉN VAMOS VALIDAR SI VIENE LA INFORMACIÓN DE LA CANTIDAD DE PÁGINAS QUE TIENE LA API PARA PASARLA AL CONTADOR DEL PAGINADOR
        let pages =
          response.data && Object.keys(response.data.info).length > 0
            ? response.data.info.pages
            : {};

        //SE QUITA LA PANTALLA DE CARGA Y SE ACTUALIZAN LAS VARIABLES CON LA INFORMACIÓN OBTENIDA DE LA API
        setLoading(false);
        setNotFoundCharacters(false);
        setCharacters(charactersRickAndMorty);
        setCount(pages);
      })
      .catch((error) => {
        //EN CASO DE ERROR EN LA PETICIÓN
        //SE QUITA LA PANTALLA DE CARGA PARA LEVANTAR UNA ALERTA QUE NOS INDIQUE EL ERROR OCURRIDO
        setLoading(false);
        setNotFoundCharacters(true);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          confirmButtonColor: "#00b0c8",
        });
      });
  }, []);

  //FUNCIÓN "FILTER_CHARACTERS"
  //ESTA FUNCIÓN SE LLAMARÁ AL MOMENTO DE UTILIZAR ALGUNO DE LOS TRES FILTROS (POR GÉNERO, POR ESPECIE O POR ESTADO) RECIBIENDO DOS PARÁMETROS (CATEGORIA Y VALOR)
  const filterCharacters = (category, value) => {
    setLoading(true);
    let url;
    //SE REALIZA CONDICIONAL PARA GENERAR URL ESPECIAL CON LOS PARÁMETROS RECIBIDOS
    //SE TRABAJA DE ESTA FORMA DEBIDO A QUE QUIZÁS YA SE ESTÁN APLICANDO FILTROS Y SE DESEA SER MÁS ESPECIFICO ENVIANDO MÁS PARÁMETROS DE BÚSQUEDA
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
        //AL RECIBIR LA RESPUESTA VAMOS A VALIDAR SI VIENE LA INFORMACIÓN DE LOS PERSONAJES PARA MOSTRAR EN LAS HERO CARD
        let charactersRickAndMorty =
          response.data && response.data.results.length > 0
            ? response.data.results
            : [];

        //TAMBIÉN VAMOS VALIDAR SI VIENE LA INFORMACIÓN DE LA CANTIDAD DE PÁGINAS QUE TIENE LA API PARA PASARLA AL CONTADOR DEL PAGINADOR
        let pages =
          response.data && Object.keys(response.data.info).length > 0
            ? response.data.info.pages
            : {};

        //SE QUITA LA PANTALLA DE CARGA Y SE ACTUALIZAN LAS VARIABLES CON LA INFORMACIÓN OBTENIDA DE LA API
        setLoading(false);
        setNotFoundCharacters(false);
        setCharacters(charactersRickAndMorty);
        setCount(pages);
      })
      .catch(() => {
        //EN CASO DE ERROR EN LA PETICIÓN
        //SE QUITA LA PANTALLA DE CARGA PARA LEVANTAR UNA ALERTA QUE NOS INDIQUE EL ERROR OCURRIDO
        setLoading(false);
        setNotFoundCharacters(true);
        setCharacters([]);
        setCount(0);
      });
  };

  //FUNCIÓN "HANDLE_CHANGE_GENDER"
  //ESTA FUNCIÓN SE LLAMARÁ AL MOMENTO DE SELECCIONAR ALGUNA DE LAS OPCIONES DEL FILTRO POR GÉNERO
  const handleChangeGender = (event) => {
    filterCharacters("gender", event.target.value);
    setGender(event.target.value);
  };

  //FUNCIÓN "HANDLE_CHANGE_SPECIES"
  //ESTA FUNCIÓN SE LLAMARÁ AL MOMENTO DE SELECCIONAR ALGUNA DE LAS OPCIONES DEL FILTRO POR ESPECIE
  const handleChangeSpecies = (event) => {
    filterCharacters("species", event.target.value);
    setSpecies(event.target.value);
  };

  //FUNCIÓN "HANDLE_CHANGE_STATUS"
  //ESTA FUNCIÓN SE LLAMARÁ AL MOMENTO DE SELECCIONAR ALGUNA DE LAS OPCIONES DEL FILTRO POR ESTADO
  const handleChangeStatus = (event) => {
    filterCharacters("status", event.target.value);
    setStatus(event.target.value);
  };

  //FUNCIÓN "HANDLE_CHANGE_PAGINATION"
  //ESTA FUNCIÓN SE LLAMARÁ AL MOMENTO DE SELECCIONAR ALGUNA DE LAS OPCIONES DEL PAGINADOR DEL SITIO
  //RECIBE LA PÁGINA INDICADA COMO PARÁMETRO
  const handleChangePagination = (page) => {
    setLoading(true);
    //SE GENERA URL QUE CONTIENE LA PÁGINA RECIBIDA Y ADEMÁS SE ENVIAN LAS VARIABLES DE LOS FILTROS EN CASO DE TENER VALORES PARA REALIZAR EL PAGINADO CON ESTOS APLICADOS
    let url = `character?page=${page}&gender=${gender}&species=${species}&status=${status}`;
    axiosClient
      .get(url)
      .then((response) => {
        //AL RECIBIR LA RESPUESTA VAMOS A VALIDAR SI VIENE LA INFORMACIÓN DE LOS PERSONAJES PARA MOSTRAR EN LAS HERO CARD
        let charactersRickAndMorty =
          response.data && response.data.results.length > 0
            ? response.data.results
            : [];
        //SE QUITA LA PANTALLA DE CARGA Y SE ACTUALIZA LA VARIABLE DE LOS PERSONAJES CON LOS DATOS OBTENIDOS
        setLoading(false);
        setNotFoundCharacters(false);
        setCharacters(charactersRickAndMorty);
      })
      .catch((error) => {
        setLoading(false);
        setNotFoundCharacters(true);
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
        {!notFoundCharacters ? (
          <>
            {characters.map((character) => (
              <HeroCard
                character={character}
                key={`GridItem-${character.id}`}
              />
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
