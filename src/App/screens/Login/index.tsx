import { useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Status } from "../../../Enums";
import { useAuth } from "../../../shared/providers/AuthProvider";
import { ScreenContainer } from "../../../styles/layout/Container";
import LoginContainer from "./components/LoginContainer";
import Loading from "../../../App/components/Loading";
import { getLocalStorage } from "../../../shared/hooks/useLocalStorage";

interface LocationState {
  from: { pathname: string };
}

function RedirectAuth({ children }: { children: JSX.Element }) {
  const { authState } = useAuth();
  const tokenRef = useRef(getLocalStorage("tokenId"));

  const location = useLocation();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || "/";

  if (authState.user) {
    return <Navigate to={from} replace />;
  }

  if (authState.status === Status.PENDING && tokenRef.current)
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
