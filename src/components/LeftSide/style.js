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
