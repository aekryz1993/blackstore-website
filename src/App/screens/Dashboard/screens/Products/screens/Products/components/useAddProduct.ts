import { useCallbackRef } from "../../../../../../../../shared/helpers/util";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { EventTargetExtended, IFormInput } from "./type";
import useLocalStorage from "../../../../../../../../shared/hooks/useLocalStorage";
import { useMultiRef } from "../../../../../../../../shared/hooks/useMultiRef";
import { ProductsContextTypeDef } from "../../../../../../../../shared/providers/ProductsProvider";
import { addProductFlow } from "../../../../../../../../shared/services/products";

type CbRefs = Pick<
  ProductsContextTypeDef,
  | "addProductRequest"
  | "addProductSuccessed"
  | "addProductFailed"
  | "addProductEnded"
>;

const defaultBody = {
  label: null,
  category: "code",
  file: null,
};

const useAddProduct = ({
  addProductRequest,
  addProductSuccessed,
  addProductFailed,
  addProductEnded,
}: CbRefs) => {
  const [body, setBody] = useState<IFormInput>(defaultBody);
  const [imagePreview, setPreview] = useState<string | null>(null);

  const [label, file] = useMultiRef<HTMLInputElement>(2);

  const [token] = useLocalStorage("tokenId");

  const savedAddProductRequest = useCallbackRef(addProductRequest);
  const savedAddProductSuccessed = useCallbackRef(addProductSuccessed);
  const savedAddProductFailed = useCallbackRef(addProductFailed);
  const savedAddProductEnded = useCallbackRef(addProductEnded);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as EventTargetExtended;
    setBody({ ...body, file: target.files[0] });
    setPreview(URL.createObjectURL(target.files[0]));
  };

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setBody({
      ...body,
      label: label.current?.value ?? "",
    });
  };

  const data = useMemo(
    () => ({
      label: body.label,
      category: body.category,
      file: body.file,
    }),
    [body.label, body.category, body.file]
  );

  useEffect(() => {
    async function addProduct() {
      const formData = new FormData();
      formData.append("label", data.label ?? "");
      formData.append("category", data.category ?? "");
      formData.append("picture", data.file ?? "");
      await addProductFlow(
        {
          addProductRequest: savedAddProductRequest.current,
          addProductSuccessed: savedAddProductSuccessed.current,
          addProductFailed: savedAddProductFailed.current,
        },
        formData,
        token as string
      );
    }
    if (data.label && token) addProduct();
  }, [
    data,
    savedAddProductEnded,
    savedAddProductFailed,
    savedAddProductRequest,
    savedAddProductSuccessed,
    token,
  ]);

  return {
    onSubmit,
    onFileChange,
    refs: [label, file],
    imagePreview,
    setPreview,
    savedAddProductEnded: savedAddProductEnded.current,
  };
};

export default useAddProduct;
