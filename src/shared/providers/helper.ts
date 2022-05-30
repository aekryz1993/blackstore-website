import { Status } from "../../Enums";

interface actionParamsType<StateType> {
  state: StateType;
  fields: () => Partial<StateType>;
}

export function loadingLayout<StateType>(state: StateType) {
  return () => ({
    ...state,
    status: Status.LOADING,
  });
}

export function loadingBtn<StateType>(state: StateType) {
  return () => ({
    ...state,
    status: Status.BTNLOADING,
  });
}

export function action<StateType>(
  { state, fields }: actionParamsType<StateType>,
  status: Status
) {
  const updatedState: Partial<StateType> = { ...state, status };
  return () => {
    for (let field in fields()) {
      updatedState[field] = fields()[field];
    }
    return updatedState as StateType;
  };
}

export function successAction<StateType>({
  state,
  fields,
}: actionParamsType<StateType>) {
  return action<StateType>({ state, fields }, Status.SUCCESS);
}

export function failAction<StateType>({
  state,
  fields,
}: actionParamsType<StateType>) {
  return action<StateType>({ state, fields }, Status.ERROR);
}

export function endAction<StateType>({
  state,
  fields,
}: actionParamsType<StateType>) {
  return action<StateType>({ state, fields }, Status.PENDING);
}

export function defaultState<StateType>(state: StateType) {
  return () => state;
}
