import { url } from "../constants/apiUrls";
import { checkDeterminedDispatch } from "../helpers/util";
import { getApi, postApi, ResponseData } from "../../apis";
import { Dispatch } from "@shared/constants/types";

export interface LoginBody {
  username: string;
  password: string;
}

export interface AuthContextLogin {
  loginRequest?: Dispatch;
  checkSession?: Dispatch;
  loginSuccessed?: Dispatch;
  loginFailed?: Dispatch;
  loginEnded?: Dispatch;
  noSession?: Dispatch;
}

export async function successLogin(
  response: ResponseData,
  dispatch: Dispatch | undefined,
  token?: string
) {
  try {
    checkDeterminedDispatch(dispatch)({
      user: response.data.user,
      token: response.data.token ?? token,
    });
  } catch (error) {
    return error;
  }
}

export async function failedLogin(
  dispatch: Dispatch | undefined,
  error?: Error
) {
  try {
    checkDeterminedDispatch(dispatch)({
      error: error?.message ?? null,
    });
  } catch (error) {
    return error;
  }
}

export async function sessionNotExist(dispatch: Dispatch | undefined) {
  try {
    checkDeterminedDispatch(dispatch)();
  } catch (error) {
    return error;
  }
}

export async function loginFlow(body: LoginBody, context: AuthContextLogin) {
  try {
    checkDeterminedDispatch(context?.loginRequest)();
    const response = await postApi({ url: url.login, body });
    successLogin(response, context?.loginSuccessed);
  } catch (error) {
    failedLogin(context?.loginFailed, error as Error);
  }
}

export async function checkSessionFlow(
  token: string,
  context: AuthContextLogin
) {
  try {
    checkDeterminedDispatch(context?.checkSession)();
    const response = await getApi(url.session, token);
    successLogin(response, context?.loginSuccessed, token);
  } catch (error) {
    failedLogin(context?.loginFailed);
  }
}
