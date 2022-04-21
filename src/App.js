import { useState } from 'react';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import { Container } from './styles/app';
import { GlobalStyle } from './styles/globalStyle';

function App() {
  const [showBack, setShowBack] = useState(true);
  return (
    <Container showBack={showBack}>
      <GlobalStyle />
      <LeftSide />
      <RightSide showBack={showBack} setShowBack={setShowBack} />
    </Container>
  );
}

export default App;
