import React from 'react';
import { usePokemons } from '../../contexts/pokemons';
import { Container } from './style';

const RightSideSmallScreens = () => {
  const { types } = usePokemons();
  console.log(types);
  return (
    <Container>
      <div>type 1: {types && types[0]}</div>
      <div>{types && types[1] && `type 2: ${types[1]}`}</div>
    </Container>
  );
};

export default RightSideSmallScreens;
