import React, { useState } from "react";
import RightSideButtons from "../RightSideButtons";
import {
  Container,
  Content,
  TopSvg,
  Front,
  Back,
  OpenArrow,
  Screen,
} from "./style";

function RightSide() {
  const [showBack, setShowBack] = useState(true);

  const handleFlip = () => {
    setShowBack(!showBack);
  };

  return (
    <Container showBack={showBack}>
      <TopSvg>
        <polyline points="483,2 313,2 224,56 0,56" />
      </TopSvg>
      <Content showBack={showBack}>
        <Front>
          <TopSvg>
            <polygon points="5,64 226,64 315,11 430,11 430,615 5,615" />
          </TopSvg>
          <Screen />
          <RightSideButtons />
        </Front>
        <Back>
          <OpenArrow onClick={handleFlip} />
          <div />
        </Back>
      </Content>
    </Container>
  );
}

export default RightSide;
