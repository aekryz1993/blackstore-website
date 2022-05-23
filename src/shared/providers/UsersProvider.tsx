import { useReducer, createContext, useContext } from "react";
import { Status } from "../../Enums";
import {
  UsersState,
  UsersAction,
  Dispatch,
  User,
} from "@shared/constants/types";
import { updateList } from "../helpers/util";
import {
  defaultState,
  endAction,
  failAction,
  loadingBtn,
  successAction,
} from "./helper";

export interface UsersContextTypeDef {
  usersState: UsersState;
  fetchUsersRequest: Dispatch;
  fetchUsersSuccessed: Dispatch;
  fetchUsersFailed: Dispatch;
  fetchUsersEnded: Dispatch;
  fetchPrevUsers: Dispatch;
  fetchNextUsers: Dispatch;
  addUserRequest: Dispatch;
  addUserSuccessed: Dispatch;
  addUserFailed: Dispatch;
  addUserEnded: Dispatch;
  updateUserRequest: Dispatch;
  updateUserSuccessed: Dispatch;
  updateUserFailed: Dispatch;
  updateUserEnded: Dispatch;
}

export type UsersContextType = UsersContextTypeDef | undefined;

const initialUsers: UsersState = {
  users: [],
  currentUsers: [],
  page: 0,
  totalPages: 0,
  totalUsers: 0,
  status: Status.PENDING,
  error: null,
};

export const reducer = (state: Readonly<UsersState>, action: UsersAction) => {
  const actions = {
    FETCHUSERS_REQUEST: loadingBtn<UsersState>(state),
    FETCHUSERS_SUCCEED: successAction<UsersState>({
      state,
      fields: {
        users:
          state.users?.length && action.payload?.users.length
            ? [...state.users, ...action.payload?.users]
            : action.payload?.users,
        currentUsers: action.payload?.users,
        totalPages: action.payload?.totalPages,
        totalUsers: action.payload?.totalUsers,
        error: null,
      },
    }),
    FETCHUSERS_FAILED: failAction<UsersState>({
      state,
      fields: { error: action.payload?.error },
    }),
    FETCHUSERS_ENDED: endAction<UsersState>({
      state,
      fields: { error: null },
    }),

    FETCHPREVUSERS: () => ({
      ...state,
      status: Status.PENDING,
      currentUsers: state.users.length
        ? state.users.slice(
            Math.ceil(state.totalUsers / state.totalPages) * (state.page - 1),
            Math.ceil(state.totalUsers / state.totalPages) * state.page
          )
        : [],
      page: state.page - 1,
    }),

    FETCHNEXTUSERS: () => ({
      ...state,
      status: Status.PENDING,
      currentUsers:
        state.users.length > state.currentUsers.length * (state.page + 1)
          ? state.users.length
            ? state.users.slice(
                Math.ceil(state.totalUsers / state.totalPages) *
                  (state.page + 1),
                Math.ceil(state.totalUsers / state.totalPages) *
                  (state.page + 2)
              )
            : state.currentUsers
          : state.currentUsers,
      page: state.page + 1,
    }),

    ADDUSER_REQUEST: loadingBtn<UsersState>(state),
    ADDUSER_SUCCEED: successAction<UsersState>({
      state,
      fields: {
        users:
          state.users?.length && action.payload?.users.length
            ? [...state.users, action.payload?.user]
            : [action.payload?.user],
        totalPages: action.payload?.totalPages,
        totalUsers: action.payload?.totalUsers,
        page: state.totalPages - 1,
        error: null,
      },
    }),
    ADDUSER_FAILED: failAction<UsersState>({
      state,
      fields: { error: action.payload?.error },
    }),
    ADDUSER_ENDED: endAction<UsersState>({
      state,
      fields: { error: null },
    }),

    UPDATEUSER_REQUEST: loadingBtn<UsersState>(state),
    UPDATEUSER_SUCCEED: successAction<UsersState>({
      state,
      fields: {
        users: updateList(
          action.payload?.users,
          action.payload?.id,
          action.payload?.updateduser
        ) as User[],
        page: state.totalPages - 1,
        error: null,
      },
    }),
    UPDATEUSER_FAILED: failAction<UsersState>({
      state,
      fields: { error: action.payload?.error },
    }),
    UPDATEUSER_ENDED: endAction<UsersState>({
      state,
      fields: { error: null },
    }),

    DEFAULT: defaultState<UsersState>(state),
  };
  return (actions[action.type] || actions["DEFAULT"])();
};

const UsersContext = createContext<UsersContextType>(undefined);

export const UsersProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialUsers);

  const fetchUsersRequest = () => dispatch({ type: "FETCHUSERS_REQUEST" });

  const fetchUsersSuccessed = ({
    users,
    totalPages,
    totalUsers,
  }: {
    users: User[];
    totalPages: number;
    totalUsers: number;
  }) =>
    dispatch({
      type: "FETCHUSERS_SUCCEED",
      payload: { users, totalPages, totalUsers },
    });

  const fetchUsersFailed = ({ error }: Pick<UsersState, "error">) =>
    dispatch({ type: "FETCHUSERS_FAILED", payload: { error } });

  const fetchUsersEnded = () => dispatch({ type: "FETCHUSERS_ENDED" });

  const fetchPrevUsers = () => dispatch({ type: "FETCHPREVUSERS" });
  const fetchNextUsers = () => dispatch({ type: "FETCHNEXTUSERS" });

  const addUserRequest = () => dispatch({ type: "ADDUSER_REQUEST" });

  const addUserSuccessed = ({
    user,
    totalPages,
    totalUsers,
  }: {
    user: User;
    totalPages: number;
    totalUsers: number;
  }) =>
    dispatch({
      type: "ADDUSER_SUCCEED",
      payload: { user, totalPages, totalUsers },
    });

  const addUserFailed = ({ error }: Pick<UsersState, "error">) =>
    dispatch({ type: "ADDUSER_FAILED", payload: { error } });

  const addUserEnded = () => dispatch({ type: "ADDUSER_ENDED" });

  const updateUserRequest = () => dispatch({ type: "UPDATEUSER_REQUEST" });

  const updateUserSuccessed = ({
    updatedUser,
    users,
    id,
  }: {
    updatedUser: User;
    users: User[];
    id: string;
  }) =>
    dispatch({
      type: "UPDATEUSER_SUCCEED",
      payload: { updatedUser, users, id },
    });

  const updateUserFailed = ({ error }: Pick<UsersState, "error">) =>
    dispatch({ type: "UPDATEUSER_FAILED", payload: { error } });

  const updateUserEnded = () => dispatch({ type: "UPDATEUSER_ENDED" });

  const value = {
    usersState: { ...state },

    fetchUsersRequest,
    fetchUsersSuccessed,
    fetchUsersFailed,
    fetchUsersEnded,

    fetchPrevUsers,
    fetchNextUsers,

    addUserRequest,
    addUserSuccessed,
    addUserFailed,
    addUserEnded,

    updateUserRequest,
    updateUserSuccessed,
    updateUserFailed,
    updateUserEnded,
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export function useUsers() {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }

  return context;
}
