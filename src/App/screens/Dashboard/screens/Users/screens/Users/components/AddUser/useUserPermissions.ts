import { useCallbackRef } from "../../../../../../../../../shared/helpers/util";
import { FormEvent, useEffect, useMemo } from "react";
import useLocalStorage from "../../../../../../../../../shared/hooks/useLocalStorage";
import { useMultiRef } from "../../../../../../../../../shared/hooks/useMultiRef";
import { UsersContextTypeDef } from "../../../../../../../../../shared/providers/UsersProvider";
import { BodyType, useAddUserBody } from "./addUserBodyProvider";
import { addUserFlow } from "../../../../../../../../../shared/services/users";

type CbRefs = Pick<
  UsersContextTypeDef,
  "addUserRequest" | "addUserSuccessed" | "addUserFailed" | "addUserEnded"
>;

const useUserPermissions = ({
  addUserRequest,
  addUserSuccessed,
  addUserFailed,
  addUserEnded,
}: CbRefs) => {
  const { userBody } = useAddUserBody();

  const [
    addProduct,
    updateProductPrice,
    updateProduct,
    addUser,
    viewUser,
    updateUser,
    updateCredit,
    updatePermissions,
    viewcmnd,
    confirmPayment,
  ] = useMultiRef<HTMLInputElement>(10);

  const [token] = useLocalStorage("tokenId");

  const savedAddUserRequest = useCallbackRef(addUserRequest);
  const savedAddUserSuccessed = useCallbackRef(addUserSuccessed);
  const savedAddUserFailed = useCallbackRef(addUserFailed);
  const savedAddUserEnded = useCallbackRef(addUserEnded);

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    async function addCategory() {
      await addUserFlow(
        {
          addUserRequest: savedAddUserRequest.current,
          addUserSuccessed: savedAddUserSuccessed.current,
          addUserFailed: savedAddUserFailed.current,
        },
        userBody as BodyType,
        token as string
      );
    }
    if (token) addCategory();
  };

  return {
    onSubmit,
    refs: [
      addProduct,
      updateProductPrice,
      updateProduct,
      addUser,
      viewUser,
      updateUser,
      updateCredit,
      updatePermissions,
      viewcmnd,
      confirmPayment,
    ],
    savedAddUserEnded: savedAddUserEnded.current,
  };
};

export default useUserPermissions;
