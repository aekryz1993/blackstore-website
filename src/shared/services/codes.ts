import { OrderType } from "../../App/screens/Dashboard/screens/Products/screens/Product/components/GetCodes/OrderProvider";
import { downloadFileApi, formDataApi, getApi } from "../../apis";
import { url } from "../constants/apiUrls";
import { Dispatch } from "../constants/types";
import { checkDeterminedDispatch } from "../helpers/util";
import { failedWithError, successResponse } from "./helpers";

export interface AddCodesContext {
  addCodesRequest?: Dispatch;
  addCodesSuccessed?: Dispatch;
  addCodesFailed?: Dispatch;
}

export interface FetchCodesContext {
  fetchCodesRequest?: Dispatch;
  fetchCodesSuccessed?: Dispatch;
  fetchCodesFailed?: Dispatch;
}

export interface CodesBody {
  file: any;
}

export interface FetchCodesParamsType {
  context: FetchCodesContext;
  token: string;
  serviceName: string;
  order: OrderType[];
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

export async function fetchCodesFlow({
  context,
  token,
  serviceName,
  order,
}: FetchCodesParamsType) {
  try {
    checkDeterminedDispatch(context?.fetchCodesRequest)();
    const response = await getApi(
      typeof url.getCodesBycategory === "function"
        ? url.getCodesBycategory(serviceName, JSON.stringify(order))
        : undefined,
      token
    );
    successResponse({
      dispatch: context?.fetchCodesSuccessed,
      response,
      labels: ["fileUrl", "commands"],
    });
    await downloadFileApi(response.data.filePath, token);
  } catch (error) {
    failedWithError(context?.fetchCodesFailed, error as Error);
  }
}
