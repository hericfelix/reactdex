import React from 'react';
import { usePokemons } from '../../contexts/pokemons';
import { Button, Container } from './style';

const RightSideButtons = () => {
  const {
    changeGenre,
    changeShiny,
    changeView,
    hasGenre,
    hasShiny,
    goToFirstPage,
    goToLastPage,
    hasRearView,
  } = usePokemons();

  return (
    <Container>
      <Button onClick={changeShiny} disabled={!hasShiny}>
        Shiny
      </Button>
      <Button onClick={changeGenre} disabled={!hasGenre}>
        Genre
      </Button>
      <Button onClick={changeView} disabled={!hasRearView}>
        Turn
      </Button>
      <Button onClick={goToFirstPage}>First</Button>
      <Button onClick={goToLastPage}>Last</Button>
      <Button disabled></Button>
      <Button disabled></Button>
      <Button disabled></Button>
      <Button disabled></Button>
      <Button disabled></Button>
    </Container>
  );
};

export default RightSideButtons;
