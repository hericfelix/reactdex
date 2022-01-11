import React from "react";
import {
  Container,
  NavContainer,
  RoundButton,
  SmallScreenContainer,
} from "./style";

const LeftSideButtons = () => {
  return (
    <Container>
      <RoundButton />
      <SmallScreenContainer>
        <div>
          <div></div>
          <div></div>
        </div>
        <div />
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
