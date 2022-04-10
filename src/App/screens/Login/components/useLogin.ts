import { Status } from "../../../../Enums";
import { AuthContextTypeDef } from "@shared/providers/AuthProvider";
import { useCallbackRef } from "../../../../shared/helpers/util";
import { useCallback, useEffect, useMemo, useState } from "react";
import { IFormInput, IFormInputFilled } from "./type";
import { loginFlow } from "../../../../shared/services/auth";
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

type CbRefs = Pick<
  AuthContextTypeDef,
  "loginRequest" | "loginSuccessed" | "loginFailed" | "loginEnded"
> & { status: Status };

interface LocationState {
  from: { pathname: string };
}

const useLogin = ({
  status,
  loginRequest,
  loginSuccessed,
  loginFailed,
  loginEnded,
}: CbRefs) => {
  const [body, setBody] = useState<IFormInput>({
    username: undefined,
    password: undefined,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as LocationState;
  const from = state?.from?.pathname || "/";

  const savedLoginRequest = useCallbackRef(loginRequest);
  const savedLoginSuccessed = useCallbackRef(loginSuccessed);
  const savedLoginFailed = useCallbackRef(loginFailed);
  const savedLoginEnded = useCallbackRef(loginEnded);
  const savedNavigate = useCallbackRef(navigate);

  const onSubmit: SubmitHandler<IFormInput> = useCallback(
    (data: IFormInput) => {
      setBody(() => data);
    },
    []
  );

  const data = useMemo(
    () => ({ username: body.username, password: body.password }),
    [body.username, body.password]
  );

  useEffect(() => {
    async function login() {
      await loginFlow(data as IFormInputFilled, {
        loginRequest: savedLoginRequest.current,
        loginSuccessed: savedLoginSuccessed.current,
        loginFailed: savedLoginFailed.current,
      });
    }
    if (data.username && data.password) login();
  }, [data, savedLoginRequest, savedLoginSuccessed, savedLoginFailed]);

  useEffect(() => {
    if (status === Status.SUCCESS) {
      savedNavigate.current(from, { replace: true });
    }
  }, [status, savedNavigate, from]);

  useEffect(() => {
    const cleanupLogin = savedLoginEnded.current;
    return () => {
      cleanupLogin();
    };
  }, [savedLoginEnded]);

  return {
    onSubmit,
  };
};

export default useLogin;
