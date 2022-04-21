import React from 'react';
import {
  ButtonsContainer,
  Container,
  Light,
  SmallButtonsContainer,
} from './style';
import { usePokemons } from '../../contexts/pokemons';

const RightSideAuxButtons = () => {
  const { goToNextPage, goToPreviousPage, previousPage, nextPage } =
    usePokemons();
  return (
    <Container>
      <ButtonsContainer>
        <button onClick={goToPreviousPage} disabled={!previousPage}>
          Previous
        </button>
        <button onClick={goToNextPage} disabled={!nextPage}>
          Next
        </button>
      </ButtonsContainer>
      <div>
        <SmallButtonsContainer>
          <button />
          <button />
        </SmallButtonsContainer>
        <Light />
      </div>
    </Container>
  );
};

export default RightSideAuxButtons;
