import { Container } from "../../../../styles/layout/Container";
import components from "../../../../styles/components";
import { Status } from "../../../../Enums";
import { Props } from "./type";
import Form from "./Form";

const { ErrorText, HeaderText } = components;

const Login = ({ onSubmit, status, error, refs }: Props) => (
  <Container className="flex flex-col gap-16 md__w-64">
    <HeaderText>Log In</HeaderText>
    <Form onSubmit={onSubmit} status={status} refs={refs} />
    {status === Status.ERROR && <ErrorText>{error}</ErrorText>}
  </Container>
);

export default Login;
