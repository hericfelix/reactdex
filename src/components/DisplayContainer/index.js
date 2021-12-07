import React from "react";
import { Container, DisplayButtons, DisplayLights, Screen } from "./style";

function DisplayContainer() {
  return (
    <Container>
      <DisplayLights>
        <div />
        <div />
      </DisplayLights>
      <Screen />
      <DisplayButtons>
        <div />
        <div>
          {Array(4)
            .fill(null)
            .map((_) => (
              <div />
            ))}
        </div>
      </DisplayButtons>
    </Container>
  );
}

export default DisplayContainer;
