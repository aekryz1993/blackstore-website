import React, { useReducer, createContext, useContext } from "react";
import { Status } from "../../Enums";
import { Dispatch, ProductCategoriesType } from "@shared/constants/types";
import { updateList, useMemoCompare } from "../helpers/util";
import {
  CategoriesState,
  CategoriesAction,
} from "../../App/screens/Dashboard/screens/Products/screens/Category//types";
import {
  defaultState,
  endAction,
  failAction,
  loadingBtn,
  successAction,
} from "./helper";
import useProduct from "../../App/screens/Dashboard/screens/Products/screens/Product/useProduct";

export interface CategoriesContextTypeDef {
  categoriesState: CategoriesState;
  fetchCategories: Dispatch;
  addCategoryRequest: Dispatch;
  addCategorySuccessed: Dispatch;
  addCategoryFailed: Dispatch;
  addCategoryEnded: Dispatch;
  updateCategoryRequest: Dispatch;
  updateCategorySuccessed: Dispatch;
  updateCategoryFailed: Dispatch;
  updateCategoryEnded: Dispatch;
}

export type CategoriesContextType = CategoriesContextTypeDef | undefined;

const initialCategories: CategoriesState = {
  categories: [],
  status: Status.PENDING,
  error: null,
};

export const reducer = (
  state: Readonly<CategoriesState>,
  action: CategoriesAction
) => {
  const actions = {
    FETCHCATEGORIES: () => ({
      ...state,
      categories: action.payload?.categories,
    }),

    ADDCATEGORY_REQUEST: loadingBtn<CategoriesState>(state),
    ADDCATEGORY_SUCCEED: successAction<CategoriesState>({
      state,
      fields: () => ({
        categories:
          state.categories.length !== 0
            ? [...state.categories, action.payload?.category]
            : [action.payload?.category],
        error: null,
      }),
    }),
    ADDCATEGORY_FAILED: failAction<CategoriesState>({
      state,
      fields: () => ({ error: action.payload?.error }),
    }),
    ADDCATEGORY_ENDED: endAction<CategoriesState>({
      state,
      fields: () => ({ error: null }),
    }),

    UPDATECATEGORY_REQUEST: loadingBtn<CategoriesState>(state),
    UPDATECATEGORY_SUCCEED: successAction<CategoriesState>({
      state,
      fields: () => ({
        categories: updateList(
          action.payload?.categories,
          action.payload?.id,
          action.payload?.updatedCategory
        ) as ProductCategoriesType[],
        error: null,
      }),
    }),
    UPDATECATEGORY_FAILED: failAction<CategoriesState>({
      state,
      fields: () => ({ error: action.payload?.error }),
    }),
    UPDATECATEGORY_ENDED: endAction<CategoriesState>({
      state,
      fields: () => ({ error: null }),
    }),

    DEFAULT: defaultState<CategoriesState>(state),
  };

  return (actions[action.type] || actions["DEFAULT"])();
};

const CategoriesContext = createContext<CategoriesContextType>(undefined);

export const CategoriesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCategories);

  const fetchCategories = ({
    categories,
  }: {
    categories: ProductCategoriesType[];
  }) => dispatch({ type: "FETCHCATEGORIES", payload: { categories } });

  const addCategoryRequest = () => dispatch({ type: "ADDCATEGORY_REQUEST" });

  const addCategorySuccessed = ({
    category,
  }: {
    category: ProductCategoriesType;
  }) => dispatch({ type: "ADDCATEGORY_SUCCEED", payload: { category } });

  const addCategoryFailed = ({ error }: Pick<CategoriesState, "error">) =>
    dispatch({ type: "ADDCATEGORY_FAILED", payload: { error } });

  const addCategoryEnded = () => dispatch({ type: "ADDCATEGORY_ENDED" });

  const updateCategoryRequest = () =>
    dispatch({ type: "UPDATECATEGORY_REQUEST" });

  const updateCategorySuccessed = ({
    categories,
    id,
    updatedCategory,
  }: {
    categories: ProductCategoriesType[];
    id: string;
    updatedCategory: ProductCategoriesType;
  }) =>
    dispatch({
      type: "UPDATECATEGORY_SUCCEED",
      payload: { categories, id, updatedCategory },
    });

  const updateCategoryFailed = ({ error }: Pick<CategoriesState, "error">) =>
    dispatch({ type: "UPDATECATEGORY_FAILED", payload: { error } });

  const updateCategoryEnded = () => dispatch({ type: "UPDATECATEGORY_ENDED" });

  const value = {
    categoriesState: { ...state },

    fetchCategories,

    addCategoryRequest,
    addCategorySuccessed,
    addCategoryFailed,
    addCategoryEnded,

    updateCategoryRequest,
    updateCategorySuccessed,
    updateCategoryFailed,
    updateCategoryEnded,
  };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error("useCategories must be used within a CategoriesProvider");
  }

  return context;
}

export const useMemoCategories = () => {
  const { product } = useProduct();

  const categories: ProductCategoriesType[] = useMemoCompare(
    product?.ProductCategories,
    (prev, next) => {
      if (!prev || !prev.length) return false;
      if (prev.length !== next.length) return false;
      for (let index in prev) {
        if (
          prev[index].id !== next[index].id ||
          prev[index].updatedAt !== next[index].updatedAt
        )
          return false;
      }
      return true;
    }
  );

  return { categories };
};
