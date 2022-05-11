import { Status } from "../../../../Enums";
import { AuthContextTypeDef } from "@shared/providers/AuthProvider";
import { useCallbackRef } from "../../../../shared/helpers/util";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { IFormInput, IFormInputFilled } from "./type";
import { loginFlow } from "../../../../shared/services/auth";
import { useMultiRef } from "../../../../shared/hooks/useMultiRef";

type CbRefs = Pick<
  AuthContextTypeDef,
  "loginRequest" | "loginSuccessed" | "loginFailed" | "loginEnded"
> & { status: Status };

const useLogin = ({
  loginRequest,
  loginSuccessed,
  loginFailed,
  loginEnded,
}: CbRefs) => {
  const [body, setBody] = useState<IFormInput>({
    username: "",
    password: "",
  });

  const [username, password] = useMultiRef<HTMLInputElement>(2);

  const savedLoginRequest = useCallbackRef(loginRequest);
  const savedLoginSuccessed = useCallbackRef(loginSuccessed);
  const savedLoginFailed = useCallbackRef(loginFailed);
  const savedLoginEnded = useCallbackRef(loginEnded);

  const onSubmit: (e: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setBody({
      username: username.current?.value,
      password: password.current?.value,
    });
  };

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
    const cleanupLogin = savedLoginEnded.current;
    return () => {
      cleanupLogin();
    };
  }, [savedLoginEnded]);

  return {
    onSubmit,
    refs: [username, password],
  };
};

export default useLogin;
