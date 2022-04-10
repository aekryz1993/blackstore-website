// import { Container } from "src/styles/layout/Container";
// import components from "src/styles/components";
// import { Status } from "src/Enums";
// import FormHook from "@shared/modules/FormHook";
import { Container } from "../../../../styles/layout/Container";
import components from "../../../../styles/components";
import { Status } from "../../../../Enums";
import { Props } from "./type";
import FormHook from "../../../../shared/modules/FormHook";
import { loginFields } from "./helper";

const { ErrorText, HeaderText } = components;

const Login = ({ onSubmit, status, error }: Props) => (
  <Container className="flex flex-col gap-16 md__w-64">
    <HeaderText>Log In</HeaderText>
    <FormHook
      onSubmit={onSubmit}
      fields={loginFields}
      fieldClsName="gap-2"
      status={status}
      textBtn="Log in"
    />
    {status === Status.ERROR && <ErrorText>{error}</ErrorText>}
  </Container>
);

export default Login;
