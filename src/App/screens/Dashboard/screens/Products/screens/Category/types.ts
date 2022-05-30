import { ProductCategoriesType } from "@shared/constants/types";
import { Status } from "@src/Enums";

export interface CategoriesState {
  categories: ProductCategoriesType[] | [];
  status: Status;
  error: string | undefined | null;
}

export type CategoriesActionType =
  | "FETCHCATEGORIES"
  | "ADDCATEGORY_REQUEST"
  | "ADDCATEGORY_SUCCEED"
  | "ADDCATEGORY_FAILED"
  | "ADDCATEGORY_ENDED"
  | "UPDATECATEGORY_REQUEST"
  | "UPDATECATEGORY_SUCCEED"
  | "UPDATECATEGORY_FAILED"
  | "UPDATECATEGORY_ENDED";

export interface CategoriesAction {
  type: CategoriesActionType;
  payload?: Record<any, any>;
}
