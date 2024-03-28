import styled from "styled-components";
import Presentation from "./presentation";
import { AppContextWrapper } from "./context";
import SimpleSnackbar from "./presentation/snackbar";

function App() {
  return (
    <AppContextWrapper>
      <Container>
        <Presentation />
        {/** alert messages */}
        <SimpleSnackbar />
      </Container>
    </AppContextWrapper>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 0 80px;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;

export default App;
