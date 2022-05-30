import { Product } from "@shared/constants/types";
import { Status } from "@src/Enums";

export interface ProductsState {
  products: Product[] | null;
  status: Status;
  error: string | undefined | null;
}

export type ProductsActionType =
  | "FETCHPRODUCTS_REQUEST"
  | "FETCHPRODUCTS_SUCCEED"
  | "FETCHPRODUCTS_FAILED"
  | "FETCHPRODUCTS_ENDED"
  | "ADDPRODUCT_REQUEST"
  | "ADDPRODUCT_SUCCEED"
  | "ADDPRODUCT_FAILED"
  | "ADDPRODUCT_ENDED"
  | "UPDATEPRODUCT_REQUEST"
  | "UPDATEPRODUCT_SUCCEED"
  | "UPDATEPRODUCT_FAILED"
  | "UPDATEPRODUCT_ENDED";

export interface ProductsAction {
  type: ProductsActionType;
  payload?: Record<any, any>;
}
