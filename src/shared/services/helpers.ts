import { Dispatch } from "../constants/types";
import { checkDeterminedDispatch } from "../helpers/util";
import { ResponseData } from "../../apis";

interface SuccessResponseType {
  dispatch: Dispatch | undefined;
  response?: ResponseData;
  token?: string;
  labels?: string[];
  dataLabels?: string[];
  data?: any[];
}

export async function successResponse({
  dispatch,
  response,
  token,
  labels,
  dataLabels,
  data,
}: SuccessResponseType) {
  try {
    const fields = Object.create(null);
    labels?.forEach((label, index) => {
      fields[label] =
        data && data[index]
          ? data[index]
          : response?.data[
              dataLabels && dataLabels[index] ? dataLabels[index] : label
            ];
    });

    if (token || response?.data.token)
      fields.token = token ?? response?.data.token;

    checkDeterminedDispatch(dispatch)(fields);
  } catch (error) {
    return error;
  }
}

export async function failedWithError(
  dispatch: Dispatch | undefined,
  error: Error
) {
  try {
    checkDeterminedDispatch(dispatch)({
      error: error?.message ?? null,
    });
  } catch (error) {
    return error;
  }
}

export async function failedWithoutError(dispatch: Dispatch | undefined) {
  try {
    checkDeterminedDispatch(dispatch)();
  } catch (error) {
    return error;
  }
}
