import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  position: absolute;
  display: flex;
`;

export const BigLight = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: blue;
  outline: 8px solid #dfe0e0;
  div {
    position: relative;
    width: 40px;
    height: 25px;
    border-radius: 50%;
    background-color: #fefefe;
    left: 15%;
    top: 7%;
    opacity: 0.9;
    transform: rotate(-20deg);
  }
`;

export const SmallLight = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 0.2px solid black;
  margin-left: 8px;
`;
