import React from "react";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import { darkTheme, lightTheme } from "../../assets/themes";
import { ContainerHeader, BoxSearch } from "./Header.styled";
import githubDark from "../../assets/images/GitHubDark.png";
import githubLight from "../../assets/images/GitHubLight.png";

const Header = ({ theme, setTheme }) => {
  return (
    <ContainerHeader theme={theme}>
      <Button
        text="Mudar Tema"
        onClick={() => setTheme(theme === darkTheme ? lightTheme : darkTheme)}
      />
      <img
        src={theme === darkTheme ? githubLight : githubDark}
        alt="Github logo"
      />
      <Title text="Busque por um perfil no Github" margin="5%" />
      <BoxSearch>
        <Input size="large" />
        <Button text="Pesquisar" size="medium" />
      </BoxSearch>
    </ContainerHeader>
  );
};

export default Header;
