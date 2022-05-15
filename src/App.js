//MATERIAL UI
import { Container, Typography } from "@mui/material";

//TEMA PERSONALIZADO DEL SITIO
import ThemeConfig from "./theme";

//COMPONENTE IMPORTADO
import Bar from "./components/AppBar";
import Footer from "./components/Footer";

//COMPONENTE PADRE
import Home from './pages/Home';

//COMPONENTE PRINCIPAL
const App = () => {
  return (
    <>
      <ThemeConfig>
        <Bar />
        <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
          <Typography
            variant="h1"
          >
            Rick And Morty API
          </Typography>
          <Home />
        </Container>
        <Footer/>
      </ThemeConfig>
    </>
  );
};

export default App;
