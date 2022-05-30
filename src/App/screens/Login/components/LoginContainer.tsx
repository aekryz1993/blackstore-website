// import { useAuth } from "@shared/providers/AuthProvider";
import { useAuth } from "../../../../shared/providers/AuthProvider";
import Login from "./Login";
import useLogin from "./useLogin";

const LoginContainer = () => {
  const { authState, loginRequest, loginSuccessed, loginFailed, loginEnded } =
    useAuth();

  const { onSubmit, refs } = useLogin({
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
      refs={refs}
    />
  );
};

export default LoginContainer;
