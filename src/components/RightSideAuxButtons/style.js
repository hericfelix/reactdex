import styled from 'styled-components';
import { keyframes } from 'styled-components';

const glowAnimation = keyframes`
    0% {
        background-color: #A08C0D
    }
    100% {
        background-color: #DDBC18
    }
`;

export const Container = styled.div`
  width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 61%;
  transform: translateX(-50%);

  > div:last-child {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  }
`;

export const ButtonsContainer = styled.div`
  button {
    background-color: #dedede;
    width: 65px;
    height: 50px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 10px;

    :first-child {
      border-radius: 5px 0 0 5px;
    }

    :last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;

export const Light = styled.div`
  animation: ${glowAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid black;
`;

export const SmallButtonsContainer = styled.div`
  width: 90px;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: var(--black);
    width: 43px;
    height: 8px;
    border-radius: 10px;
  }
`;
