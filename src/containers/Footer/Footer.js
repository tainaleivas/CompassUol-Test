import React from 'react';
import Button from '../../components/Button/Button';
import CardRepos from '../../components/CardRepos/CardRepos';
import CardStar from '../../components/CardStar/CardStar';
import CardUser from '../../components/CardUser/CardUser';
import { ContainerFooter, BoxButtons } from './Footer.styled';
import { GlobalContext } from '../../global/GlobalContext';

const Footer = () => {
  const {
    user,
    showUser,
    showRepos,
    setShowRepos,
    showStarred,
    setShowStarred,
    message,
  } = React.useContext(GlobalContext);

  const handleClickRepos = () => {
    setShowRepos(!showRepos);
    setShowStarred(false);
  };

  const handleClickStarred = () => {
    setShowStarred(!showStarred);
    setShowRepos(false);
  };

  React.useEffect(() => {
    if (!user) {
      setShowRepos(false);
      setShowStarred(false);
    }
  }, [user, showRepos, showStarred, setShowRepos, setShowStarred]);

  return (
    <ContainerFooter>
      {message === "Usuário encontrado com Sucesso" && (
        <BoxButtons>
          <Button text="Repositórios" size="large" onClick={handleClickRepos} />
          <Button text="Favoritos" size="large" onClick={handleClickStarred} />
        </BoxButtons>
      )}
      {showUser && <CardUser />}
      {showRepos && <CardRepos />}
      {showStarred && <CardStar />}
    </ContainerFooter>
  );
};

export default Footer;
