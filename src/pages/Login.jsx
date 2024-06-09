import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
// import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-image: linear-gradient(
      rgba(199, 158, 246, 0.761),
      rgba(176, 93, 185, 0.673)
    ),
    url("../../public/bg.jpg");
  background-size: 100% auto;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      {/* <Heading as="h4">Please log in to continue</Heading> */}
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
