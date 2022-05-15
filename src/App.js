import { Container, Typography } from "@mui/material";
import ThemeConfig from "./theme";
import Navbar from "./components/AppBar";
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <ThemeConfig>
        <Navbar />
        <Container maxWidth="lg" sx={{ paddingTop: "2rem", paddingBottom: "5rem" }}>
          <Typography
            variant="h1"
          >
            Rick And Morty API
          </Typography>
          <Home />
        </Container>
      </ThemeConfig>
    </>
  );
};

export default App;
