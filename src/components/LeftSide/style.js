import styled from "styled-components";

export const Container = styled.div`
  background-color: #dd0b2d;
  height: 700px;
  width: 500px;
  position: relative;
  border: 3px solid black;
  border-radius: 10px 10px 0 10px;
  box-shadow: -6px 5px #460510;
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

export const Connector = styled.div`
  width: 60px;
  height: 620px;
  position: absolute;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  border: 1px solid black;
`;
