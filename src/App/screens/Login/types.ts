import { User } from "@shared/constants/types";
import { Status } from "@src/Enums";

export interface AuthState {
  user: User | null | undefined;
  error: string | null | undefined;
  token: string | null | undefined;
  status: Status;
}

export interface SessionState {
  user: User | null | undefined;
  token: string | null | undefined;
  status: Status;
  isAuth: boolean;
}

export type AuthActionType =
  | "LOGIN_REQUEST"
  | "LOGIN_SUCCEED"
  | "LOGIN_FAILED"
  | "CHECK_SESSION"
  | "LOGIN_ENDED"
  | "LOGOUT_REQUEST"
  | "LOGOUT_SUCCEED"
  | "LOGOUT_FAILED"
  | "LOGOUT_ENDED";

export interface AuthAction {
  type: AuthActionType;
  payload?: Record<any, any>;
}
