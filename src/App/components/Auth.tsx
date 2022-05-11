import { useEffect, useRef } from "react";
import { checkSessionFlow } from "../../shared/services/auth";
import { useCallbackRef } from "../../shared/helpers/util";
import useLocalStorage, {
  getLocalStorage,
} from "../../shared/hooks/useLocalStorage";
import { useAuth } from "../../shared/providers/AuthProvider";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import appRoutes from "../routes";

const Auth: React.FC = () => {
  const { authState, checkSession, loginSuccessed, loginFailed, loginEnded } =
    useAuth();

  const tokenRef = useRef(getLocalStorage("tokenId"));

  const [token] = useLocalStorage<string | null | undefined>(
    "tokenId",
    authState.token ?? JSON.parse(tokenRef.current as string)
  );

  const savedSessionRequest = useCallbackRef(checkSession);
  const savedSessionSuccessed = useCallbackRef(loginSuccessed);
  const savedSessionFailed = useCallbackRef(loginFailed);
  const savedSessionEnded = useCallbackRef(loginEnded);

  useEffect(() => {
    let doUpdate = true;
    async function check() {
      if (doUpdate && token) {
        await checkSessionFlow(token as string, {
          checkSession: savedSessionRequest.current,
          loginSuccessed: savedSessionSuccessed.current,
          loginFailed: savedSessionFailed.current,
          loginEnded: savedSessionEnded.current,
        });
      }
    }
    check();
    return () => {
      doUpdate = false;
    };
  }, [
    token,
    savedSessionRequest,
    savedSessionSuccessed,
    savedSessionFailed,
    savedSessionEnded,
  ]);

  useEffect(() => {
    const cleanup = savedSessionEnded.current;
    return () => cleanup();
  }, [savedSessionEnded]);

  return (
    <Routes>
      <Route element={<Layout />}>
        {appRoutes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            element={<route.Component routes={route.routes} />}
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Auth;
