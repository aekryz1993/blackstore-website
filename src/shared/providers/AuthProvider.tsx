import React, { useReducer, createContext, useContext } from "react";
// import { Status } from "src/Enums";
import { Status } from "../../Enums";
import { AuthAction, AuthState } from "@App/screens/Login/types";
import { Dispatch, User } from "@shared/constants/types";

export interface AuthContextTypeDef {
  authState: AuthState;
  loginRequest: Dispatch;
  loginSuccessed: Dispatch;
  loginFailed: Dispatch;
  checkSession: Dispatch;
  loginEnded: Dispatch;
  logoutRequest: Dispatch;
  logoutSuccessed: Dispatch;
  logoutFailed: Dispatch;
  logoutEnded: Dispatch;
}

export type AuthContextType = AuthContextTypeDef | undefined;

const initialAuth: AuthState = {
  user: null,
  error: null,
  status: Status.PENDING,
  token: null,
};

export const reducer = (state: Readonly<AuthState>, action: AuthAction) => {
  function loginRequest() {
    return {
      ...state,
      status: Status.BTNLOADING,
    };
  }

  function request() {
    return {
      ...state,
      status: Status.LOADING,
    };
  }

  function endRequest() {
    return {
      ...state,
      status: Status.PENDING,
      error: null,
    };
  }

  function successLogin() {
    return {
      ...state,
      status: Status.SUCCESS,
      error: null,
      user: action.payload?.user,
      token: action.payload?.token,
    };
  }

  function failedLogin() {
    return {
      ...state,
      status: Status.ERROR,
      error: action.payload?.error,
      user: null,
      token: null,
    };
  }

  function successLogout() {
    return {
      ...state,
      status: Status.SUCCESS,
      error: null,
      user: null,
      token: null,
    };
  }

  function failedLogout() {
    return {
      ...state,
      status: Status.ERROR,
      error: action.payload?.error,
    };
  }

  function defaultState() {
    return state;
  }

  const actions = {
    LOGIN_REQUEST: loginRequest,
    LOGIN_SUCCEED: successLogin,
    LOGIN_FAILED: failedLogin,
    CHECK_SESSION: request,
    LOGIN_ENDED: endRequest,
    LOGOUT_REQUEST: request,
    LOGOUT_SUCCEED: successLogout,
    LOGOUT_FAILED: failedLogout,
    LOGOUT_ENDED: endRequest,
    DEFAULT: defaultState,
  };

  return (actions[action.type] || actions["DEFAULT"])();
};

const AuthContext = createContext<AuthContextType>(undefined);

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialAuth);

  const loginRequest = () => dispatch({ type: "LOGIN_REQUEST" });

  const loginSuccessed = ({ user, token }: { user: User; token: string }) =>
    dispatch({ type: "LOGIN_SUCCEED", payload: { user, token } });

  const checkSession = () => dispatch({ type: "CHECK_SESSION" });

  const loginFailed = ({ error }: Pick<AuthState, "error">) =>
    dispatch({ type: "LOGIN_FAILED", payload: { error } });

  const loginEnded = () => dispatch({ type: "LOGIN_ENDED" });

  const logoutRequest = () => dispatch({ type: "LOGOUT_REQUEST" });

  const logoutSuccessed = () => dispatch({ type: "LOGOUT_SUCCEED" });

  const logoutFailed = ({ error }: Pick<AuthState, "error">) =>
    dispatch({ type: "LOGOUT_FAILED", payload: { error } });

  const logoutEnded = () => dispatch({ type: "LOGOUT_ENDED" });

  const value = {
    authState: { ...state },
    loginRequest,
    loginSuccessed,
    loginFailed,
    checkSession,
    loginEnded,
    logoutRequest,
    logoutSuccessed,
    logoutFailed,
    logoutEnded,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
