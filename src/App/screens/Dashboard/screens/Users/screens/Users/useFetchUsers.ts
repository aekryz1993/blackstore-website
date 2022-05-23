import { useEffect, useState } from "react";
import { UsersContextTypeDef } from "../../../../../../../shared/providers/UsersProvider";
import { MouseEventHandlerType } from "../../../../../../../shared/constants/types";
import useLocalStorage from "../../../../../../../shared/hooks/useLocalStorage";
import { useCallbackRef } from "../../../../../../../shared/helpers/util";
import { fetchUsersFlow } from "../../../../../../../shared/services/users";

type CbRefs = Pick<
  UsersContextTypeDef,
  | "usersState"
  | "fetchUsersRequest"
  | "fetchUsersSuccessed"
  | "fetchUsersFailed"
  | "fetchUsersEnded"
  | "fetchPrevUsers"
  | "fetchNextUsers"
>;

enum BtnAction {
  NEXT = "NEXT",
  PENDING = "PENDING",
}

const useFetchUsers = ({
  usersState,
  fetchUsersRequest,
  fetchUsersSuccessed,
  fetchUsersFailed,
  fetchUsersEnded,
  fetchPrevUsers,
  fetchNextUsers,
}: CbRefs) => {
  const [btnAction, setBtnAction] = useState<BtnAction>(BtnAction.PENDING);
  const [token] = useLocalStorage("tokenId");

  const savedFetchUsersRequest = useCallbackRef(fetchUsersRequest);
  const savedFetchUsersSuccessed = useCallbackRef(fetchUsersSuccessed);
  const savedFetchUsersFailed = useCallbackRef(fetchUsersFailed);
  const savedFetchUsersEnded = useCallbackRef(fetchUsersEnded);

  useEffect(() => {
    const cleanupFetchUsers = savedFetchUsersEnded.current;
    async function fetchUsers() {
      await fetchUsersFlow(
        {
          fetchUsersRequest: savedFetchUsersRequest.current,
          fetchUsersSuccessed: savedFetchUsersSuccessed.current,
          fetchUsersFailed: savedFetchUsersFailed.current,
          fetchUsersEnded: cleanupFetchUsers,
        },
        token as string,
        usersState.page
      );
    }

    if (
      (usersState.users.length === 0 ||
        (usersState.users.length <
          (usersState.page + 1) * usersState.currentUsers.length &&
          btnAction === BtnAction.NEXT)) &&
      token
    ) {
      btnAction === BtnAction.NEXT && setBtnAction(BtnAction.PENDING);
      fetchUsers();
    }
    return () => {
      cleanupFetchUsers();
    };
  }, [
    btnAction,
    savedFetchUsersEnded,
    savedFetchUsersFailed,
    savedFetchUsersRequest,
    savedFetchUsersSuccessed,
    token,
    usersState.currentUsers.length,
    usersState.page,
    usersState.totalUsers,
    usersState.users.length,
  ]);

  const onPrev: MouseEventHandlerType<SVGElement> = (event) => {
    event.preventDefault();
    setBtnAction(BtnAction.PENDING);
    fetchPrevUsers();
  };

  const onNext: MouseEventHandlerType<SVGElement> = (event) => {
    event.preventDefault();
    setBtnAction(BtnAction.NEXT);
    fetchNextUsers();
  };

  return {
    onPrev,
    onNext,
  };
};

export default useFetchUsers;
