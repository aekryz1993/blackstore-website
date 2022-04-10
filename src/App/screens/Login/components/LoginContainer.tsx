import { FC } from "react";
// import { useAuth } from "@shared/providers/AuthProvider";
import { useAuth } from "../../../../shared/providers/AuthProvider";
import Login from "./Login";
import useLogin from "./useLogin";

const LoginContainer: FC = () => {
  const { authState, loginRequest, loginSuccessed, loginFailed, loginEnded } =
    useAuth();

  const { onSubmit } = useLogin({
    status: authState.status,
    loginRequest,
    loginSuccessed,
    loginFailed,
    loginEnded,
  });

  return (
    <Login
      onSubmit={onSubmit}
      status={authState.status}
      error={authState.error}
    />
  );
};

export default LoginContainer;
