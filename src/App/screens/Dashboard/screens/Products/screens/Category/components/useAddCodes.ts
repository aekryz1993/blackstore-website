import { useCallbackRef } from "../../../../../../../../shared/helpers/util";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import useLocalStorage from "../../../../../../../../shared/hooks/useLocalStorage";
import { CodesContextTypeDef } from "../../../../../../../../shared/providers/CodesProvider";
import { addCodesFlow } from "../../../../../../../../shared/services/codes";
import { useMultiRef } from "../../../../../../../../shared/hooks/useMultiRef";

type CbRefs = Pick<
  CodesContextTypeDef,
  "addCodesRequest" | "addCodesSuccessed" | "addCodesFailed" | "addCodesEnded"
> & { categoryId: string };

const useAddCodes = ({
  addCodesRequest,
  addCodesSuccessed,
  addCodesFailed,
  addCodesEnded,
  categoryId,
}: CbRefs) => {
  const [file, setFile] = useState<File | null>(null);

  const [token] = useLocalStorage("tokenId");

  const savedAddCodesRequest = useCallbackRef(addCodesRequest);
  const savedAddCodesSuccessed = useCallbackRef(addCodesSuccessed);
  const savedAddCodesFailed = useCallbackRef(addCodesFailed);
  const savedAddCodesEnded = useCallbackRef(addCodesEnded);

  const dataFile = useMemo(() => file, [file]);

  const [fileRef] = useMultiRef<HTMLInputElement>(1);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target?.files && event.target?.files[0]);
  };

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    async function addCodes() {
      const formData = new FormData();
      formData.append("file", dataFile ?? "");
      await addCodesFlow(
        {
          addCodesRequest: savedAddCodesRequest.current,
          addCodesSuccessed: savedAddCodesSuccessed.current,
          addCodesFailed: savedAddCodesFailed.current,
        },
        formData,
        categoryId,
        token as string
      );
    }
    dataFile && categoryId && addCodes();
  };

  return {
    onSubmit,
    onFileChange,
    fileRef,
    savedAddCodesEnded: savedAddCodesEnded.current,
  };
};

export default useAddCodes;
