import { getApi } from "../../apis";
import { url } from "../constants/apiUrls";
import { Dispatch } from "../constants/types";
import { checkDeterminedDispatch } from "../helpers/util";
import { failedWithoutError, successResponse } from "./helpers";

export interface FetchProductsContext {
  fetchProductsRequest?: Dispatch;
  fetchProductsSuccessed?: Dispatch;
  fetchProductsFailed?: Dispatch;
  fetchProductsEnded?: Dispatch;
}

export async function fetchProductsFlow(
  context: FetchProductsContext,
  token: string
) {
  try {
    checkDeterminedDispatch(context?.fetchProductsRequest)();
    const response = await getApi(
      typeof url.products === "function" ? url.products("code") : undefined,
      token
    );
    successResponse({
      dispatch: context?.fetchProductsSuccessed,
      response,
      labels: ["products"],
      dataLabels: ["services"],
    });
  } catch (error) {
    failedWithoutError(context?.fetchProductsFailed);
  }
}
