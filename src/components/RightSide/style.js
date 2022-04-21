import styled, { keyframes, css } from 'styled-components';

const openAnimation = keyframes`
0% {
  transform: perspective(1600px) rotateY(0deg) translateX(0);
}
20% {
  transform: perspective(1600px) rotateY(30deg)  translateX(0);
}
35% {
  transform: perspective(1600px) rotateY(50deg)  translateX(0);
}
50% {
  transform: perspective(1600px) rotateY(80deg)  translateX(0);
}
54% {
  transform: perspective(1600px) rotateY(88deg)  translateX(0)
}

57% {
  transform:perspective(1600px) rotateY(93deg)  translateX(-10px)
}

60% {
  transform:perspective(1600px) rotateY(100deg)  translateX(-20px);
}
70% {
  transform:perspective(1600px) rotateY(120deg)  translateX(-30px)
}
80% {
  transform:perspective(1600px) rotateY(140deg)  translateX(-40px)
}
90% {
  transform:perspective(1600px) rotateY(160deg)  translateX(-50px)
}
100% {
  transform:perspective(1600px) rotateY(180deg)  translateX(-57px);
}
`;

const glowAnimation = keyframes`
0% {
  border-left: 15px solid yellow;
}
100% {
  border-left: 15px solid rgb(30,30,30);
}
`;

export const Container = styled.div`
  position: absolute;
  height: 622px;
  width: 438px;
  background-color: var(--bright-red);
  border: 3px solid black;
  border-top: none;
  border-radius: 0 0 0 10px;
  clip-path: polygon(0 54px, 226px 54px, 315px 0, 101% 0, 101% 101%, 0 101%);
  animation: ${(props) =>
    props.showBack
      ? 'none'
      : css`
          ${openAnimation} 1s linear forwards
        `};
  transform-style: preserve-3d;
  box-shadow: 0 5px var(--dark-red);
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
  transition-delay: 0.58s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.showBack ? 'rotateY(180deg)' : 'none')};
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

export const InnerContent = styled.div`
  transform: rotateY(180deg);
  width: 100%;
  height: 100%;
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
  cursor: pointer;
  animation: ${glowAnimation};
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-duration: 0.9s;
  animation-direction: alternate;
  animation-delay: 0.8s;
`;
