import React from 'react';
import { usePokemons } from '../../contexts/pokemons';
import { Attributes, Container, Stats } from './style';

const RightSideScreen = () => {
  const { pokemon } = usePokemons();
  return (
    <Container>
      {pokemon && (
        <Attributes>
          <p>ID: {pokemon.id}</p>
          <p>height: {pokemon.height / 10}m</p>
          <p>width: {pokemon.weight / 10}kg</p>
        </Attributes>
      )}
      {pokemon && (
        <Stats>
          {pokemon.stats?.map((stat) => (
            <p>
              {stat.stat.name}: {stat.base_stat}
            </p>
          ))}
        </Stats>
      )}
    </Container>
  );
};

export default RightSideScreen;
