import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 370px;
  justify-content: space-between;
  position: absolute;
  bottom: 10%;
  left: 44%;
  transform: translateX(-50%);
`;

export const RoundButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #242526;
  box-shadow: -1px 1px 1px 2px #131414;
`;

export const SmallScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  align-items: center;
  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-direction: row;
    width: 150px;
    > div {
      width: 30px;
      height: 5px;
      background-color: blue;
      border-radius: 5px;
      border: 1px solid #131414;
    }
    > div:first-child {
      background-color: #990009;
    }
  }
  > div:last-child {
    width: 130px;
    height: 60px;
    background-color: green;
    border-radius: 5px;
    border: 2px solid #242526;
  }
`;

export const NavContainer = styled.div`
  width: 80px;
  height: 80px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  > div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 23.5px;
    background-color: #242526;
    border: 2px solid black;
    border-radius: 6px;
    box-shadow: -0.5px 1px 0px 1px #131414;
    div {
      height: 8px;
      width: 8px;
      border-radius: 50%;
      border: 2.5px solid black;
    }
  }
  > div:nth-child(2) {
    position: absolute;
    height: 25px;
    width: 23px;
    background-color: #242526;
    border: 2.5px solid black;
    border-right: none;
    top: 0;
    transform: rotate(90deg);
    border-radius: 6px 0 0 6px;
    box-shadow: -1px 1px 0px 0px #131414;
  }
  > div:last-child {
    position: absolute;
    height: 25px;
    width: 25px;
    background-color: #242526;
    border: 2.5px solid black;
    border-right: none;
    bottom: 0;
    transform: rotate(-90deg);
    border-radius: 6px 0 0 6px;
    box-shadow: -1px -1px 0px 0px #131414;
  }
`;
