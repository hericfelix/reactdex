import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  border: 2px solid black;
  border-radius: 10px;
  height: 100px;
  background-color: #151818;
  position: absolute;
  top: 120px;
  left: 50%;
  padding: 10px;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`;

export const Stats = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: fit-content;
  p {
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    color: yellow;
    font-size: 9px;
    line-height: 15px;
  }
`;

export const Attributes = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: fit-content;
  p {
    margin: 0;
    font-family: 'Press Start 2P', cursive;
    color: yellow;
    font-size: 9px;
    line-height: 15px;
  }
`;
