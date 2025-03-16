import styled from "styled-components";
import Calculator from "./components/CalculatorParent";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return(
    <AppContainer>
      <Header/>
      <ContentContainer>
        <Calculator />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  // Make the app take up the whole screen
  height: 100vh;
  width: 100vw;
`;
const ContentContainer = styled.div`
  // Make the min height the full page minus the header and footer
  min-height: calc(100vh - 90px);
`;

export default App;
