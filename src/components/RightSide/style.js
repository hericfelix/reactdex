import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 615px;
  width: 400px;
  background-color: #dd0b2d;
  border: 3px solid black;
  border-top: none;
  border-radius: 0 0 10px 0;
  ::before {
    content: "";
    border-right: 100px solid #fff;
    border-bottom: 80px solid transparent;
    position: absolute;
    z-index: -0;
    right: 100px;
  }

  ::after {
    content: "";
    border-right: 110px solid #fff;
    border-bottom: 80px solid #fff;
    position: absolute;
    right: -10px;
  }
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
