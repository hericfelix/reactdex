import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import { Container } from "./styles/app";

function App() {
  return (
    <Container>
      <LeftSide />
      <RightSide />
    </Container>
  );
}

export default App;
