import React from "react";
import DisplayContainer from "../DisplayContainer";
import LeftSideButtons from "../LeftSideButtons";
import LeftSideLightsContainer from "../LeftSideLightsContainer";
import { Connector, Container, TopSvg } from "./style";

function LeftSide() {
  return (
    <Container>
      <LeftSideLightsContainer />
      <TopSvg>
        <polyline points="0,140 220,140 320,80 500,80" />
        <polygon points="5,148 223,148 323,88 435,88 435,695 5,695" />
      </TopSvg>
      <DisplayContainer />
      <LeftSideButtons />
      <Connector />
    </Container>
  );
}

export default LeftSide;
