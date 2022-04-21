import styled from 'styled-components';
import bg from '../assets/bg.png';

export const Container = styled.div`
  position: absolute;
  background-image: url(${bg});
  top: 50%;
  left: ${(props) => (props.showBack ? '50%' : '44%')};
  transform: translate(-50%, -50%);
  transition: 1.4s ease-in-out;
  display: flex;
  align-items: flex-end;
  box-shadow: 1.5px 5px var(--dark-red);
  border-radius: 10px 10px 10px 10px;
`;
