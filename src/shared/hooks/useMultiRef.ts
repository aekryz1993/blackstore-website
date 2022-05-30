import { createRef, RefObject } from "react";

export const useMultiRef = <T>(refsNumber: number): RefObject<T>[] => {
  const refs = [];
  for (let i = 0; i < refsNumber; i++) {
    refs.push(createRef());
  }
  return refs as RefObject<T>[];
};
