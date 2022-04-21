import React from "react";
import { BigLight, Container, SmallLight } from "./style";

function LeftSideLightsContainer() {
  const smallLightColors = ["#950320", "#cab513", "#479153"];

  return (
    <Container>
      <BigLight>
        <div />
      </BigLight>
      {smallLightColors.map((color, index) => (
        <SmallLight key={index} color={color}>
          <div />
        </SmallLight>
      ))}
    </Container>
  );
}

export default LeftSideLightsContainer;
