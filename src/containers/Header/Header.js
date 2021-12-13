import React from 'react';
import Input from '../../components/Input/Input';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';
import { darkTheme, lightTheme } from '../../assets/themes';
import { ContainerHeader, BoxSearch } from './Header.styled';
import githubDark from '../../assets/images/GitHubDark.png';
import githubLight from '../../assets/images/GitHubLight.png';
import { GlobalContext } from '../../global/GlobalContext';

const Header = ({ theme, setTheme }) => {
  const { user, setUser, setShowUser, message, setMessage } =
    React.useContext(GlobalContext);
    
  const handleChange = (e) => {
    setUser(e.target.value);
    setShowUser(false);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    user && setShowUser(true);
  };

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
      <BoxSearch onSubmit={handleSubmit}>
        <Input size="x-large" value={setUser} onChange={handleChange} />
        <Button text="Pesquisar" size="large" type="submit" />
      </BoxSearch>
      {message && <Title size="h2" text={message} />}
    </ContainerHeader>
  );
};

export default Header;
