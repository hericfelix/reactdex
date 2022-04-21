import React from 'react';
import { usePokemons } from '../../contexts/pokemons';
import { capitalizeFirstLetter } from '../../utils';
import {
  Container,
  NavContainer,
  RoundButton,
  SmallScreen,
  SmallScreenContainer,
} from './style';

const LeftSideButtons = () => {
  const { pokemon } = usePokemons();
  return (
    <Container>
      <RoundButton />
      <SmallScreenContainer>
        <div>
          <div></div>
          <div></div>
        </div>
        <SmallScreen>
          <p>{pokemon?.name ? capitalizeFirstLetter(pokemon.name) : ''}</p>
        </SmallScreen>
      </SmallScreenContainer>
      <NavContainer>
        <div>
          <div />
        </div>
        <div />
        <div />
      </NavContainer>
    </Container>
  );
};

export default LeftSideButtons;
