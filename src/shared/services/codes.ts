import { formDataApi } from "../../apis";
import { url } from "../constants/apiUrls";
import { Dispatch } from "../constants/types";
import { checkDeterminedDispatch } from "../helpers/util";
import { failedWithError, successResponse } from "./helpers";

export interface AddCodesContext {
  addCodesRequest?: Dispatch;
  addCodesSuccessed?: Dispatch;
  addCodesFailed?: Dispatch;
  addCodesEnded?: Dispatch;
}

export interface CodesBody {
  file: any;
}

export async function addCodesFlow(
  context: AddCodesContext,
  data: FormData,
  categoryId: string,
  token: string
) {
  try {
    checkDeterminedDispatch(context?.addCodesRequest)();
    await formDataApi({
      url:
        typeof url.addCodesBycategory === "function"
          ? url.addCodesBycategory(categoryId)
          : undefined,
      body: data,
      token,
    });
    successResponse({
      dispatch: context?.addCodesSuccessed,
    });
  } catch (error) {
    failedWithError(context?.addCodesFailed, error as Error);
  }
}
