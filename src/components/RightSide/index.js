import React from "react";
import { Container, TopSvg } from "./style";

function RightSide() {
  return (
    <Container>
      <TopSvg>
        <polyline points="0,2 120,2 209,55 435,55" />
        <polygon points="5,11 115,11 204,64 430,64 430,615 5,615" />
      </TopSvg>
    </Container>
  );
}

export default RightSide;
