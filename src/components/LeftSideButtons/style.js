import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 370px;
  justify-content: space-between;
  position: absolute;
  bottom: 9%;
  left: 44%;
  transform: translateX(-50%);
`;

export const RoundButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #242526;
  box-shadow: -1px 1px 1px 2px var(--black);
`;

export const SmallScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
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
      border: 1px solid var(--black);
    }
    > div:first-child {
      background-color: #990009;
    }
  }
`;

export const SmallScreen = styled.div`
  width: 140px;
  height: 60px;
  background-color: green;
  border-radius: 5px;
  border: 2px solid #242526;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  p {
    text-align: center;
    font-size: 11px;
    line-height: 14px;
    font-family: 'Press Start 2P', cursive;
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
    box-shadow: -0.5px 1px 0px 1px var(--black);
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
    box-shadow: -1px 1px 0px 0px var(--black);
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
    box-shadow: -1px -1px 0px 0px var(--black);
  }
`;
