import {
  resetInputs,
  useCallbackRef,
} from "../../../../../../../../shared/helpers/util";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { IFormInput } from "./type";
import {
  addCategoryFlow,
  CategoryBody,
} from "../../../../../../../../shared/services/category";
import { CategoriesContextTypeDef } from "../../../../../../../../shared/providers/CategoriesProvider";
import useLocalStorage from "../../../../../../../../shared/hooks/useLocalStorage";
import { useMultiRef } from "../../../../../../../../shared/hooks/useMultiRef";
import { Status } from "../../../../../../../../Enums";

type CbRefs = Pick<
  CategoriesContextTypeDef,
  | "categoriesState"
  | "addCategoryRequest"
  | "addCategorySuccessed"
  | "addCategoryFailed"
  | "addCategoryEnded"
> & {
  serviceID: string | undefined;
};

const defaultBody = {
  label: "",
  dollar: 0,
  dinnar: 0,
  euro: 0,
};

const useAddCategory = ({
  categoriesState,
  addCategoryRequest,
  addCategorySuccessed,
  addCategoryFailed,
  addCategoryEnded,
  serviceID,
}: CbRefs) => {
  const [body, setBody] = useState<IFormInput>(defaultBody);

  const [label, dollar, dinnar, euro] = useMultiRef<HTMLInputElement>(4);

  const [token] = useLocalStorage("tokenId");

  const savedAddCategoryRequest = useCallbackRef(addCategoryRequest);
  const savedAddCategorySuccessed = useCallbackRef(addCategorySuccessed);
  const savedAddCategoryFailed = useCallbackRef(addCategoryFailed);
  const savedAddCategoryEnded = useCallbackRef(addCategoryEnded);

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setBody({
      label: label.current?.value ?? "",
      dollar: Number(dollar.current?.value) ?? 0,
      dinnar: Number(dinnar.current?.value) ?? 0,
      euro: Number(euro.current?.value) ?? 0,
    });
    categoriesState.status === Status.SUCCESS &&
      resetInputs([label, dollar, dinnar, euro]);
  };

  const data = useMemo(
    () => ({
      label: body.label,
      dollar: body.dollar,
      dinnar: body.dinnar,
      euro: body.euro,
      serviceID,
    }),
    [body.dinnar, body.dollar, body.euro, body.label, serviceID]
  );

  useEffect(() => {
    async function addCategory() {
      await addCategoryFlow(
        {
          addCategoryRequest: savedAddCategoryRequest.current,
          addCategorySuccessed: savedAddCategorySuccessed.current,
          addCategoryFailed: savedAddCategoryFailed.current,
        },
        data as CategoryBody,
        token as string
      );
    }
    if (data.label && token && data.serviceID) addCategory();
  }, [
    data,
    savedAddCategoryFailed,
    savedAddCategoryRequest,
    savedAddCategorySuccessed,
    token,
  ]);

  useEffect(() => {
    const cleanupAddCategory = savedAddCategoryEnded.current;
    return () => {
      cleanupAddCategory();
    };
  }, [savedAddCategoryEnded]);

  return {
    onSubmit,
    refs: [label, dollar, dinnar, euro],
  };
};

export default useAddCategory;
