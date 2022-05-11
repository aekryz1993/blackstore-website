import { url } from "../constants/apiUrls";
import { checkDeterminedDispatch } from "../helpers/util";
import { getApi, postApi } from "../../apis";
import { Dispatch } from "@shared/constants/types";
import {
  failedWithError,
  failedWithoutError,
  successResponse,
} from "./helpers";

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
}

export interface AuthContextLogout {
  logoutRequest?: Dispatch;
  logoutSuccessed?: Dispatch;
  logoutFailed?: Dispatch;
  logoutEnded?: Dispatch;
}

export async function loginFlow(body: LoginBody, context: AuthContextLogin) {
  try {
    checkDeterminedDispatch(context?.loginRequest)();
    const response = await postApi({ url: url.login as string, body });
    successResponse({
      dispatch: context?.loginSuccessed,
      response,
      labels: ["user"],
    });
  } catch (error) {
    failedWithError(context?.loginFailed, error as Error);
  }
}

export async function checkSessionFlow(
  token: string,
  context: AuthContextLogin
) {
  try {
    checkDeterminedDispatch(context?.checkSession)();
    const response = await getApi(url.session as string, token);
    successResponse({
      dispatch: context?.loginSuccessed,
      response,
      token,
      labels: ["user"],
    });
  } catch (error) {
    failedWithoutError(context?.loginFailed);
  }
}

export async function logoutFlow(context: AuthContextLogout, token: string) {
  try {
    checkDeterminedDispatch(context?.logoutRequest)();
    await getApi(url.logout as string, token);
    successResponse({ dispatch: context?.logoutSuccessed });
  } catch (error) {
    failedWithoutError(context?.logoutFailed);
  }
}
