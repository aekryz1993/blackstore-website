import { Dispatch } from "@shared/constants/types";
// import { Status } from "@src/Enums";
import { RefObject, useEffect, useRef } from "react";
import { Status } from "../../Enums";

type Callback = (...args: any[]) => any;
interface itemObj {
  id: string;
  [key: string]: any;
}

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

export const findItemById = <T extends { id: string }>(
  items: T[] | null,
  id: string | undefined
) => items?.filter((item) => item.id === id)[0];

export const updateList = (
  items: itemObj[],
  id: string,
  updatedItem: itemObj
) => {
  const notUpdated = items?.filter((item) => item.id !== id);
  return notUpdated ? [updatedItem, ...notUpdated] : [updatedItem];
};

export const removeStar = (str: string) => str.split("*")[0];

export const useCallbackRef = (callback: Callback) => {
  const callbackRef = useRef(callback);
  // useLayoutEffect(() => {
  //   console.log(callbackRef);
  //   callbackRef.current = callback;
  // }, [callback]);
  return callbackRef;
};

export const resetInputs = (refs: RefObject<HTMLInputElement>[]) => {
  refs.forEach((ref) => {
    ref.current!.value = "";
  });
};

export const findIndexById = (
  id: string,
  items: { id: string; [key: string]: any }[] | null
) => items && items.length && items.findIndex((item) => item.id === id);

// from useHook (https://usehooks.com/)
export function useMemoCompare(
  next: any,
  compare: (prev: any, next: any) => boolean
) {
  const previousRef = useRef();
  const previous = previousRef.current;
  const isEqual = compare(previous, next);
  useEffect(() => {
    if (!isEqual) {
      previousRef.current = next;
    }
  });
  return isEqual ? previous : next;
}
