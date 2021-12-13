import React from 'react';
import GlobalStyle from './assets/GlobalStyle.js';
import { ThemeProvider } from 'styled-components';
import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer.js';
import { darkTheme } from './assets/themes';
import { User } from './global/GlobalContext';

const App = () => {
  const [theme, setTheme] = React.useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <User>
        <Header theme={theme} setTheme={setTheme} />
        <Footer />
      </User>
    </ThemeProvider>
  );
};

export default App;
