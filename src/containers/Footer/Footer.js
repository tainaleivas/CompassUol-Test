import React from 'react'
import Button from '../../components/Button/Button'
import { ContainerFooter, BoxButtons } from './Footer.styled'

const Footer = () => {
  return (
    <ContainerFooter>
      <BoxButtons>
        <Button text="Repositórios" size="large"/>
        <Button text="Favoritos" size="large"/>
      </BoxButtons>
    </ContainerFooter>
  )
}

export default Footer
