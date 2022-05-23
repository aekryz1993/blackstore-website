import { BodyType } from "../../App/screens/Dashboard/screens/Users/screens/Users/components/AddUser/addUserBodyProvider";
import { postApi, updateApi, getApi } from "../../apis";
import { url } from "../constants/apiUrls";
import { Dispatch, User } from "../constants/types";
import { checkDeterminedDispatch } from "../helpers/util";
import { EndAction, failedWithError, successResponse } from "./helpers";

export interface fetchUsersContext {
  fetchUsersRequest?: Dispatch;
  fetchUsersSuccessed?: Dispatch;
  fetchUsersFailed?: Dispatch;
  fetchUsersEnded?: Dispatch;
}

export interface AddUserContext {
  addUserRequest?: Dispatch;
  addUserSuccessed?: Dispatch;
  addUserFailed?: Dispatch;
}

export interface UpdateUserContext {
  updateUserRequest?: Dispatch;
  updateUserSuccessed?: Dispatch;
  updateUserFailed?: Dispatch;
}

export async function fetchUsersFlow(
  context: fetchUsersContext,
  token: string,
  page: number
) {
  try {
    checkDeterminedDispatch(context?.fetchUsersRequest)();
    const response = await getApi(
      typeof url.users === "function" ? url.users(page) : undefined,
      token
    );
    successResponse({
      dispatch: context?.fetchUsersSuccessed,
      response,
      labels: ["users", "totalPages", "totalUsers"],
    });
    EndAction(context?.fetchUsersEnded);
  } catch (error) {
    failedWithError(context?.fetchUsersFailed, error as Error);
    EndAction(context?.fetchUsersEnded);
  }
}

export async function addUserFlow(
  context: AddUserContext,
  body: BodyType,
  token: string
) {
  try {
    checkDeterminedDispatch(context?.addUserRequest)();
    const response = await postApi<BodyType>({
      url: url.addUser as string,
      body,
      token,
    });
    successResponse({
      dispatch: context?.addUserSuccessed,
      response,
      labels: ["user", "totalPages", "totalUsers"],
    });
  } catch (error) {
    failedWithError(context?.addUserFailed, error as Error);
  }
}

interface UpdateFlowType {
  context: UpdateUserContext;
  token: string;
  id: string;
  body: BodyType;
  users: User[];
}

export async function updateUserFlow({
  context,
  token,
  id,
  body,
  users,
}: UpdateFlowType) {
  try {
    checkDeterminedDispatch(context?.updateUserRequest)();
    const response = await updateApi<BodyType>({
      url:
        typeof url.updateUser === "function" ? url.updateUser(id) : undefined,
      body,
      token,
    });
    successResponse({
      dispatch: context?.updateUserSuccessed,
      response,
      labels: ["users", "id", "user"],
      data: [users, id],
    });
  } catch (error) {
    failedWithError(context?.updateUserFailed, error as Error);
  }
}
