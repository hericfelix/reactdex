import React from "react";
import LeftSideLightsContainer from "../LeftSideLightsContainer";
import { Container, TopSvg } from "./style";

function LeftSide() {
  return (
    <Container>
      <LeftSideLightsContainer />
      <TopSvg>
        <polyline points="0,140 300,140 400,80 500,80" />
        <polygon points="5,148 303,148 403,88 435,88 435,695 5,695" />
      </TopSvg>
    </Container>
  );
}

export default LeftSide;
