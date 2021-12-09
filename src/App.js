import React from "react";
import Input from "./components/Input/Input";
import Paragraph from "./components/Paragraph/Paragraph";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import GlobalStyle from "./assets/GlobalStyle.js";
import { darkTheme, lightTheme } from "./assets/themes.js";
import { ThemeProvider } from "styled-components";
import Avatar from "./components/Avatar/Avatar";

const App = () => {
  const [theme, setTheme] = React.useState(darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button
        text="Mudar Tema"
        onClick={() => setTheme(theme === darkTheme ? lightTheme : darkTheme)}
      />
      <Input />
      <Paragraph text="Teste" />
      <Title text="Titulo" />
      <Avatar />
    </ThemeProvider>
  );
};

export default App;
