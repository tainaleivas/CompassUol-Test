import React from "react";
import GlobalStyle from "./assets/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer.js";
import { darkTheme } from "./assets/themes";

const App = () => {
  const [theme, setTheme] = React.useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header theme={theme} setTheme={setTheme} />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
