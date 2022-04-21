import { createGlobalStyle } from 'styled-components';
import cursor from '../assets/customCursor.cur';

export const GlobalStyle = createGlobalStyle`
:root {
    --bright-red: #dd0b2d;
    --dark-red: #460510;
    --black: #131414;
}
button {
    cursor: url(${cursor}), auto;
}
`;
