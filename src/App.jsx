import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
const StyledApp = styled.div`
  background-color: red;
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">The Wild Oasis...</Heading>
        <Heading as="h2">Check in and out...</Heading>
        <Button onClick={() => alert("Alert")}> Check In</Button>
        <Button onClick={() => alert("Alert")}> Check Out</Button>
        <Heading as="h3">Check in and out...</Heading>
        <Input type="number" placeholder="Number of Guests" />

        {/* <div>FitGym</div> */}
      </StyledApp>
    </>
  );
}

export default App;
