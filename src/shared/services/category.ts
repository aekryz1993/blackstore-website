import { postApi } from "../../apis";
import { url } from "../constants/apiUrls";
import { Dispatch, ProductCategoriesType } from "../constants/types";
import { checkDeterminedDispatch } from "../helpers/util";
import { failedWithError, successResponse } from "./helpers";

export interface CategoryBody {
  label: string;
  serviceID: string;
  dollar: number;
  dinnar: number;
  euro: number;
}

interface UpdateType {
  context: UpdateCategoryContext;
  body: CategoryBody;
  token: string;
  id: string;
  categories: ProductCategoriesType[];
}

export interface AddCategoryContext {
  addCategoryRequest?: Dispatch;
  addCategorySuccessed?: Dispatch;
  addCategoryFailed?: Dispatch;
  addCategoryEnded?: Dispatch;
}

export interface UpdateCategoryContext {
  updateCategoryRequest?: Dispatch;
  updateCategorySuccessed?: Dispatch;
  updateCategoryFailed?: Dispatch;
  updateCategoryEnded?: Dispatch;
}

export async function addCategoryFlow(
  context: AddCategoryContext,
  body: CategoryBody,
  token: string
) {
  try {
    checkDeterminedDispatch(context?.addCategoryRequest)();
    const response = await postApi<CategoryBody>({
      url: url.addCategory as string,
      body,
      token,
    });
    successResponse({
      dispatch: context?.addCategorySuccessed,
      response,
      labels: ["category"],
      dataLabels: ["product"],
    });
  } catch (error) {
    failedWithError(context?.addCategoryFailed, error as Error);
  }
}

export async function updateCategoryFlow({
  context,
  body,
  token,
  id,
  categories,
}: UpdateType) {
  try {
    checkDeterminedDispatch(context?.updateCategoryRequest)();
    const response = await postApi<CategoryBody>({
      url:
        typeof url.updateCategory === "function"
          ? (url.updateCategory(id) as string)
          : undefined,
      body,
      token,
    });
    successResponse({
      dispatch: context?.updateCategorySuccessed,
      response,
      labels: ["categories", "id", "updatedCategory"],
      data: [categories, id],
    });
  } catch (error) {
    failedWithError(context?.updateCategoryFailed, error as Error);
  }
}
