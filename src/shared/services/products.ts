import { formDataApi, getApi } from "../../apis";
import { url } from "../constants/apiUrls";
import { Dispatch, Product } from "../constants/types";
import { checkDeterminedDispatch } from "../helpers/util";
import {
  EndAction,
  failedWithError,
  failedWithoutError,
  successResponse,
} from "./helpers";

export interface FetchProductsContext {
  fetchProductsRequest?: Dispatch;
  fetchProductsSuccessed?: Dispatch;
  fetchProductsFailed?: Dispatch;
  savedFProductsEnded?: Dispatch;
}

export interface AddProductsContext {
  addProductRequest?: Dispatch;
  addProductSuccessed?: Dispatch;
  addProductFailed?: Dispatch;
}

export interface UpdateProductsContext {
  updateProductRequest?: Dispatch;
  updateProductSuccessed?: Dispatch;
  updateProductFailed?: Dispatch;
}

interface UpdateType {
  context: UpdateProductsContext;
  body: FormData;
  token: string;
  id: string;
  products: Product[];
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
    EndAction(context?.savedFProductsEnded);
  } catch (error) {
    failedWithoutError(context?.fetchProductsFailed);
    EndAction(context?.savedFProductsEnded);
  }
}

export async function addProductFlow(
  context: AddProductsContext,
  data: FormData,
  token: string
) {
  try {
    checkDeterminedDispatch(context?.addProductRequest)();
    const response = await formDataApi({
      url:
        typeof url.addProduct === "function"
          ? url.addProduct()
          : url.addProduct,
      body: data,
      token,
    });
    successResponse({
      dispatch: context?.addProductSuccessed,
      response,
      labels: ["product"],
    });
  } catch (error) {
    failedWithError(context?.addProductFailed, error as Error);
  }
}

export async function updateProductFlow({
  context,
  body,
  token,
  id,
  products,
}: UpdateType) {
  try {
    checkDeterminedDispatch(context?.updateProductRequest)();
    const response = await formDataApi({
      url:
        typeof url.updateProduct === "function"
          ? url.updateProduct(id)
          : undefined,
      body,
      token,
    });
    successResponse({
      dispatch: context?.updateProductSuccessed,
      labels: ["products", "id", "updatedProduct"],
      response,
      data: [products, id],
    });
  } catch (error) {
    failedWithError(context?.updateProductFailed, error as Error);
  }
}
