import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 623px;
  width: 434px;
  background-color: #dd0b2d;
  border: 3px solid black;
  border-top: none;
  border-radius: 0 0 10px 0;
  clip-path: polygon(0 0, 123px 0, 212px 54px, 101% 54px, 101% 101%, 0 101%);
`;

export const TopSvg = styled.svg`
  height: 100%;
  width: 100%;
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
