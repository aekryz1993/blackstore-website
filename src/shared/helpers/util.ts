import { Dispatch } from "@shared/constants/types";
// import { Status } from "@src/Enums";
import { useRef } from "react";
// import { Dispatch } from "../constants/types";
import { Status } from "../../Enums";

export function checkDeterminedDispatch(dispatch: Dispatch | undefined) {
  if (dispatch !== undefined && typeof dispatch === "function") return dispatch;
  throw new Error("should determine dispatch action");
}

export function isMatch<T>(value1: T, value2: T) {
  return value1 === value2;
}

export function isLoading(status: Status) {
  return status === Status.LOADING;
}

export function isBtnLoading(status: Status) {
  return status === Status.BTNLOADING;
}

type Callback = (...args: any[]) => any;

export const useCallbackRef = (callback: Callback) => {
  const callbackRef = useRef(callback);
  // useLayoutEffect(() => {
  //   console.log(callbackRef);
  //   callbackRef.current = callback;
  // }, [callback]);
  return callbackRef;
};
