import React from 'react';
import { usePokemons } from '../../contexts/pokemons';
import { Container, DisplayButtons, DisplayLights, Screen } from './style';

function DisplayContainer() {
  const { sprite, pokemon } = usePokemons();

  return (
    <Container>
      <DisplayLights>
        <div />
        <div />
      </DisplayLights>
      <Screen>
        <img src={sprite} alt={pokemon?.name} />
      </Screen>
      <DisplayButtons>
        <div />
        <div>
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} />
            ))}
        </div>
      </DisplayButtons>
    </Container>
  );
}

export default DisplayContainer;
