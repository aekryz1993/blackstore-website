import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../shared/providers/AuthProvider";
import { ScreenContainer } from "../../../styles/layout/Container";
import LoginContainer from "./components/LoginContainer";

interface LocationState {
  from: { pathname: string };
}

function RedirectAuth({ children }: { children: JSX.Element }) {
  const { authState } = useAuth();

  const location = useLocation();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || "/";

  if (authState.user) {
    return <Navigate to={from} replace />;
  }

  return children;
}

const Login = () => (
  <RedirectAuth>
    <ScreenContainer className="flex justify-center items-center">
      <LoginContainer />
    </ScreenContainer>
  </RedirectAuth>
);

export default Login;
