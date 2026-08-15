import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const H1 = styled.h1`
  font-size: 20px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  background-color: red;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis...</H1>
        {/* <Button onClick={() => alert("Alert")}> Check In</Button>
        <Button onClick={() => alert("Alert")}> Check Out</Button>
        <Input type="number" placeholder="Number of Guests" /> */}

        {/* <div>FitGym</div> */}
      </StyledApp>
    </>
  );
}

export default App;
