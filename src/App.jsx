import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
const StyledApp = styled.div`
  padding: 20px;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading type="h1">The Wild Oasis...</Heading>
            <div>
              <Heading as="h2">Check in and out...</Heading>
              <Button onClick={() => alert("Alert")}>Check In</Button>
              <Button
                variation="secondary"
                size="medium"
                onClick={() => alert("Alert")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as="h3">Check in and out...</Heading>
            <form action="">
              <Input type="number" placeholder="Number of Guests" />
              <Input type="number" placeholder="Number of Guests" />
            </form>
          </Row>
        </Row>

        {/* <div>FitGym</div> */}
      </StyledApp>
    </>
  );
}

export default App;
