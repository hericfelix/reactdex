import React from 'react';
import RightSideAuxButtons from '../RightSideAuxButtons';
import RightSideButtons from '../RightSideButtons';
import RightSideScreen from '../RightSideScreen';
import RightSideSmallScreens from '../RightSideSmallScreens';
import {
  Container,
  Content,
  TopSvg,
  Front,
  Back,
  OpenArrow,
  InnerContent,
} from './style';

function RightSide({ showBack, setShowBack }) {
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
          <InnerContent>
            <RightSideScreen />
            <RightSideButtons />
            <RightSideAuxButtons />
            <RightSideSmallScreens />
          </InnerContent>
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
