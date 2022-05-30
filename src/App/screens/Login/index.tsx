import { Navigate, useLocation } from "react-router-dom";
import { Status } from "../../../Enums";
import { useAuth } from "../../../shared/providers/AuthProvider";
import { ScreenContainer } from "../../../styles/layout/Container";
import LoginContainer from "./components/LoginContainer";
import Loading from "../../../App/components/Loading";

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

  if (authState.status === Status.PENDING && authState.token)
    return <Loading />;

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
