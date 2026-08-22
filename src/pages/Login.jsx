import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const StyledH4 = styled.h4`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
`;

const MROW = styled(Row)`
  /* background-color: red; */
  font-size: 2rem;
  font-weight: 600;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <StyledH4>Log in to your account</StyledH4>

      <LoginForm />
      <MROW type="horizontal">
        <p>Test credntials:</p>
        <span>user2@test.com/password</span>
      </MROW>
    </LoginLayout>
  );
}

export default Login;
