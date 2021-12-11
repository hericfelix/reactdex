import styled, { keyframes, css } from "styled-components";

const openAnimation = keyframes`
0% {
  transform:rotateY(0deg) translateX(0);
}
20% {
  transform:rotateY(30deg) translateX(20px);
}
35% {
  transform:rotateY(50deg) translateX(50px);
}
50% {
  transform:rotateY(80deg) translateX(140px);
}
54% {
  transform:rotateY(88deg) translateX(400px)
}

57% {
  transform:rotateY(93deg) translateX(-400px)
}

60% {
  transform:rotateY(100deg) translateX(-200px);
}
70% {
  transform:rotateY(120deg) translateX(-90px)
}
80% {
  transform:rotateY(140deg) translateX(-64px)
}
90% {
  transform:rotateY(160deg) translateX(-60px)
}
100% {
  transform: rotateY(180deg) translateX(-57px);
}
`;

export const Container = styled.div`
  position: absolute;
  height: 622px;
  width: 438px;
  background-color: #dd0b2d;
  border: 3px solid black;
  border-top: none;
  border-radius: 0 0 0 10px;
  clip-path: polygon(0 54px, 226px 54px, 315px 0, 101% 0, 101% 101%, 0 101%);
  animation: ${(props) =>
    props.showBack
      ? "none"
      : css`
          ${openAnimation} 1s linear forwards
        `};
  transform-style: preserve-3d;
  perspective: 800px;
  box-shadow: 0 5px #460510;
  transform-origin: right;
`;

export const TopSvg = styled.svg`
  height: 100%;
  width: 100%;
  position: absolute;
  left: -50%;
  transform: translateX(50%);
  polyline {
    fill: none;
    stroke: black;
    stroke-width: 5;
    stroke-linejoin: round;
  }
  polygon {
    fill: none;
    stroke: black;
    stroke-width: 2;
    stroke-linejoin: round;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition-delay: 0.45s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.showBack ? "rotateY(180deg)" : "none")};
  text-align: center;
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(0deg);
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  > div:last-child {
    position: absolute;
    bottom: 7%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    width: 200px;
    height: 10px;
    border: 1.5px solid black;
  }
`;

export const OpenArrow = styled.div`
  position: absolute;
  left: 3%;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 15px solid yellow;
`;
