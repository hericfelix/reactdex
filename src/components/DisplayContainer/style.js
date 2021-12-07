import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 300px;
  position: absolute;
  left: 44%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #dedede;
  border-radius: 10px 10px 10px 50px;
  box-shadow: -4px 4px 2px #969696;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DisplayLights = styled.div`
  width: 55px;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  margin-top: 10px;
  > div {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #dd0b2d;
    border: 0.2px solid black;
    filter: brightness(1.5);
  }
`;

export const Screen = styled.div`
  width: 250px;
  height: 200px;
  background-color: black;
  margin-top: 10px;
  border-radius: 10px;
`;

export const DisplayButtons = styled.div`
  width: 235px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

  > div:first-child {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #dd0b2d;
    border: 0.2px solid black;
    filter: brightness(1.5);
    box-shadow: -1.5px 1.5px #3b030c;
  }

  > div:last-child {
    width: 40px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      width: 100%;
      height: 2px;
      background-color: black;
    }
  }
`;
