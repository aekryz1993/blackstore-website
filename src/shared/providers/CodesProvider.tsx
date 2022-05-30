import { useReducer, createContext, useContext } from "react";
import { Status } from "../../Enums";
import {
  CodesAction,
  CodesState,
  CodesType,
  Dispatch,
} from "@shared/constants/types";
import {
  defaultState,
  endAction,
  failAction,
  loadingBtn,
  successAction,
} from "./helper";

export interface CodesContextTypeDef {
  codesState: CodesState;
  addCodesRequest: Dispatch;
  addCodesSuccessed: Dispatch;
  addCodesFailed: Dispatch;
  addCodesEnded: Dispatch;
  fetchCodesRequest: Dispatch;
  fetchCodesSuccessed: Dispatch;
  fetchCodesFailed: Dispatch;
  fetchCodesEnded: Dispatch;
}

export type CodesContextType = CodesContextTypeDef | undefined;

const initialCodes: CodesState = {
  codes: [],
  fileUrl: null,
  commands: null,
  status: Status.PENDING,
  error: null,
};

export const reducer = (state: Readonly<CodesState>, action: CodesAction) => {
  const actions = {
    ADDCODES_REQUEST: loadingBtn<CodesState>(state),
    ADDCODES_SUCCEED: successAction<CodesState>({
      state,
      fields: () => ({
        codes: [],
        error: null,
      }),
    }),
    ADDCODES_FAILED: failAction<CodesState>({
      state,
      fields: () => ({ error: action.payload?.error }),
    }),
    ADDCODES_ENDED: endAction<CodesState>({
      state,
      fields: () => ({ error: null }),
    }),

    FETCHCODES_REQUEST: loadingBtn<CodesState>(state),
    FETCHCODES_SUCCEED: successAction<CodesState>({
      state,
      fields: () => ({
        codes: action.payload?.codes ? action.payload?.codes : [],
        fileUrl: action.payload?.fileUrl,
        commands: action.payload?.commands,
        error: null,
      }),
    }),
    FETCHCODES_FAILED: failAction<CodesState>({
      state,
      fields: () => ({ error: action.payload?.error }),
    }),
    FETCHCODES_ENDED: endAction<CodesState>({
      state,
      fields: () => ({ error: null, fileUrl: null, commands: null }),
    }),

    DEFAULT: defaultState<CodesState>(state),
  };

  return (actions[action.type] || actions["DEFAULT"])();
};

const CodesContext = createContext<CodesContextType>(undefined);

export const CodesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCodes);

  const addCodesRequest = () => dispatch({ type: "ADDCODES_REQUEST" });

  const addCodesSuccessed = () => dispatch({ type: "ADDCODES_SUCCEED" });

  const addCodesFailed = ({ error }: Pick<CodesState, "error">) =>
    dispatch({ type: "ADDCODES_FAILED", payload: { error } });

  const addCodesEnded = () => dispatch({ type: "ADDCODES_ENDED" });

  const fetchCodesRequest = () => dispatch({ type: "FETCHCODES_REQUEST" });

  const fetchCodesSuccessed = ({
    codes,
    commands,
    fileUrl,
  }: {
    codes?: CodesType[];
    fileUrl: string;
    commands: { [key: string]: number }[];
  }) =>
    dispatch({
      type: "FETCHCODES_SUCCEED",
      payload: { codes, commands, fileUrl },
    });

  const fetchCodesFailed = ({ error }: Pick<CodesState, "error">) =>
    dispatch({ type: "FETCHCODES_FAILED", payload: { error } });

  const fetchCodesEnded = () => dispatch({ type: "FETCHCODES_ENDED" });

  const value = {
    codesState: { ...state },

    addCodesRequest,
    addCodesSuccessed,
    addCodesFailed,
    addCodesEnded,

    fetchCodesRequest,
    fetchCodesSuccessed,
    fetchCodesFailed,
    fetchCodesEnded,
  };

  return (
    <CodesContext.Provider value={value}>{children}</CodesContext.Provider>
  );
};

export function useCodes() {
  const context = useContext(CodesContext);
  if (!context) {
    throw new Error("useCodes must be used within a CodesProvider");
  }

  return context;
}
