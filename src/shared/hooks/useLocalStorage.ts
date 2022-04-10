import { useEffect, useState } from "react";

export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  return value;
};

const useLocalStorage = <T>(key: string, value?: T) => {
  const [storedValue, setValue] = useState<T | null | undefined>(value);

  if (!key) {
    throw new Error("useLocalStorage key may not be falsy");
  }

  useEffect(() => {
    let doUpdate = true;
    if (doUpdate) {
      const sValue = getLocalStorage(key);
      if (sValue) setValue(() => JSON.parse(sValue));
    }
    return () => {
      doUpdate = false;
    };
  }, [key]);

  useEffect(() => {
    let doUpdate = true;
    if (doUpdate && value) {
      localStorage.setItem(key, JSON.stringify(value));
      setValue(() => value);
    }
    return () => {
      doUpdate = false;
    };
  }, [key, value]);

  return [storedValue, setValue];
};

export default useLocalStorage;
