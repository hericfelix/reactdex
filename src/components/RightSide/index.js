import React from "react";
import { Container, TopSvg } from "./style";

function RightSide() {
  return (
    <Container>
      <TopSvg>
        <polyline points="0,2 200,2 300,82 400,82" />
        <polygon points="5,11 195,11 295,91 395,91 395,610 5,610" />
      </TopSvg>
    </Container>
  );
}

export default RightSide;
