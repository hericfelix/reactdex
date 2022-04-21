import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 340px;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Button = styled.button`
  background-color: #28aafe;
  width: 20%;
  height: 50px;
  font-weight: 700;
  text-transform: uppercase;
  :first-child {
    border-radius: 5px 0 0 0;
  }
  :nth-child(5) {
    border-radius: 0 5px 0 0;
  }
  :nth-child(6) {
    border-radius: 0 0 0 5px;
  }
  :last-child {
    border-radius: 0 0 5px 0;
  }
`;
