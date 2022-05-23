import { useCallbackRef } from "../../../../../../../../shared/helpers/util";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  updateCategoryFlow,
  CategoryBody,
} from "../../../../../../../../shared/services/category";
import { CategoriesContextTypeDef } from "../../../../../../../../shared/providers/CategoriesProvider";
import useLocalStorage from "../../../../../../../../shared/hooks/useLocalStorage";
import { useMultiRef } from "../../../../../../../../shared/hooks/useMultiRef";
import { IFormInput } from "../../Product/components/type";
import useDeepCompareEffect from "use-deep-compare-effect";

type CbRefs = Pick<
  CategoriesContextTypeDef,
  | "categoriesState"
  | "updateCategoryRequest"
  | "updateCategorySuccessed"
  | "updateCategoryFailed"
  | "updateCategoryEnded"
> & {
  id: string | undefined;
};

const defaultBody = {
  label: "",
  dollar: 0,
  dinnar: 0,
  euro: 0,
};

const useEditCategory = ({
  categoriesState,
  updateCategoryRequest,
  updateCategorySuccessed,
  updateCategoryFailed,
  updateCategoryEnded,
  id,
}: CbRefs) => {
  const [body, setBody] = useState<IFormInput>(defaultBody);

  const [label, dollar, dinnar, euro] = useMultiRef<HTMLInputElement>(4);

  const [token] = useLocalStorage("tokenId");

  const savedUpdateCategoryRequest = useCallbackRef(updateCategoryRequest);
  const savedUpdateCategorySuccessed = useCallbackRef(updateCategorySuccessed);
  const savedUpdateCategoryFailed = useCallbackRef(updateCategoryFailed);
  const savedUpdateCategoryEnded = useCallbackRef(updateCategoryEnded);

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setBody({
      label: label.current?.value ?? "",
      dollar: Number(dollar.current?.value) ?? 0,
      dinnar: Number(dinnar.current?.value) ?? 0,
      euro: Number(euro.current?.value) ?? 0,
    });
  };

  const data = useMemo(
    () => ({
      label: body.label,
      dollar: body.dollar,
      dinnar: body.dinnar,
      euro: body.euro,
    }),
    [body.dinnar, body.dollar, body.euro, body.label]
  );

  useDeepCompareEffect(() => {
    async function updateCategory() {
      await updateCategoryFlow({
        context: {
          updateCategoryRequest: savedUpdateCategoryRequest.current,
          updateCategorySuccessed: savedUpdateCategorySuccessed.current,
          updateCategoryFailed: savedUpdateCategoryFailed.current,
        },
        body: data as CategoryBody,
        token: token as string,
        id: id as string,
        categories: categoriesState.categories,
      });
    }
    if (data.label && token && id) updateCategory();
  }, [
    data,
    id,
    savedUpdateCategoryFailed,
    savedUpdateCategoryRequest,
    savedUpdateCategorySuccessed,
    token,
  ]);

  return {
    onSubmit,
    refs: [label, dollar, dinnar, euro],
    savedUpdateCategoryEnded: savedUpdateCategoryEnded.current,
  };
};

export default useEditCategory;
