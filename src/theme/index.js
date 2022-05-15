//MATERIAL UI
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

//COMPONENTES PARA CREACIÓN DE TEMA CUSTOMIZADO DEL SITIO
import palette from './palette';
import typography from './typography';
import breakpoints from './breakpoints';
import componentsOverride from './overrides';


export default function ThemeConfig({ children }) {

  const theme = createTheme({
    palette: { ...palette.light, mode: 'light' },
    typography,
    breakpoints,
  });
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
