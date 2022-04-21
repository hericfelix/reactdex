import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 83%;
  left: 50%;
  width: 340px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 155px;
    height: 45px;
    border: 2px solid black;
    border-radius: 10px;
    background-color: #151818;
    font-family: 'Press Start 2P', cursive;
    color: yellow;
    font-size: 10px;
    line-height: 14px;
  }
`;
