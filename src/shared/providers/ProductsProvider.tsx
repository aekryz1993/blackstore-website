import React, { useReducer, createContext, useContext } from "react";
import { Status } from "../../Enums";
import { Dispatch, Product } from "@shared/constants/types";
import {
  ProductsState,
  ProductsAction,
} from "../../App/screens/Dashboard/screens/Products/types";
import { updateList } from "../helpers/util";
import {
  defaultState,
  endAction,
  failAction,
  loadingBtn,
  loadingLayout,
  successAction,
} from "./helper";

export interface ProductsContextTypeDef {
  productsState: ProductsState;
  fetchProductsRequest: Dispatch;
  fetchProductsSuccessed: Dispatch;
  fetchProductsFailed: Dispatch;
  fetchProductsEnded: Dispatch;
  addProductRequest: Dispatch;
  addProductSuccessed: Dispatch;
  addProductFailed: Dispatch;
  addProductEnded: Dispatch;
  updateProductRequest: Dispatch;
  updateProductSuccessed: Dispatch;
  updateProductFailed: Dispatch;
  updateProductEnded: Dispatch;
}

export type ProductsContextType = ProductsContextTypeDef | undefined;

const initialProducts: ProductsState = {
  products: null,
  status: Status.PENDING,
  error: null,
};

export const reducer = (
  state: Readonly<ProductsState>,
  action: ProductsAction
) => {
  const actions = {
    FETCHPRODUCTS_REQUEST: loadingLayout<ProductsState>(state),
    FETCHPRODUCTS_SUCCEED: successAction<ProductsState>({
      state,
      fields: () => ({
        products: action.payload?.products,
        error: null,
      }),
    }),
    FETCHPRODUCTS_FAILED: failAction<ProductsState>({
      state,
      fields: () => ({ error: null }),
    }),
    FETCHPRODUCTS_ENDED: endAction<ProductsState>({
      state,
      fields: () => ({ error: null }),
    }),

    ADDPRODUCT_REQUEST: loadingBtn<ProductsState>(state),
    ADDPRODUCT_SUCCEED: successAction<ProductsState>({
      state,
      fields: () => ({
        products: state.products
          ? [...state.products, action.payload?.product]
          : [action.payload?.product],
        error: null,
      }),
    }),
    ADDPRODUCT_FAILED: failAction<ProductsState>({
      state,
      fields: () => ({ error: action.payload?.error }),
    }),
    ADDPRODUCT_ENDED: endAction<ProductsState>({
      state,
      fields: () => ({ error: null }),
    }),

    UPDATEPRODUCT_REQUEST: loadingBtn<ProductsState>(state),
    UPDATEPRODUCT_SUCCEED: successAction<ProductsState>({
      state,
      fields: () => ({
        products: updateList(
          action.payload?.products,
          action.payload?.id,
          action.payload?.updatedProduct
        ) as Product[],
        error: null,
      }),
    }),
    UPDATEPRODUCT_FAILED: failAction<ProductsState>({
      state,
      fields: () => ({ error: action.payload?.error }),
    }),
    UPDATEPRODUCT_ENDED: endAction<ProductsState>({
      state,
      fields: () => ({ error: null }),
    }),

    DEFAULT: defaultState<ProductsState>(state),
  };

  return (actions[action.type] || actions["DEFAULT"])();
};

const ProdutsContext = createContext<ProductsContextType>(undefined);

export const ProductsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialProducts);

  const fetchProductsRequest = () =>
    dispatch({ type: "FETCHPRODUCTS_REQUEST" });

  const fetchProductsSuccessed = ({ products }: { products: Product[] }) =>
    dispatch({ type: "FETCHPRODUCTS_SUCCEED", payload: { products } });

  const fetchProductsFailed = () => dispatch({ type: "FETCHPRODUCTS_FAILED" });

  const fetchProductsEnded = () => dispatch({ type: "FETCHPRODUCTS_ENDED" });

  const addProductRequest = () => dispatch({ type: "ADDPRODUCT_REQUEST" });

  const addProductSuccessed = ({ product }: { product: Product }) =>
    dispatch({ type: "ADDPRODUCT_SUCCEED", payload: { product } });

  const addProductFailed = ({ error }: Pick<ProductsState, "error">) =>
    dispatch({ type: "ADDPRODUCT_FAILED", payload: { error } });

  const addProductEnded = () => dispatch({ type: "ADDPRODUCT_ENDED" });

  const updateProductRequest = () =>
    dispatch({ type: "UPDATEPRODUCT_REQUEST" });

  const updateProductSuccessed = ({
    products,
    id,
    updatedProduct,
  }: {
    products: Product[];
    id: string;
    updatedProduct: Product;
  }) =>
    dispatch({
      type: "UPDATEPRODUCT_SUCCEED",
      payload: { products, id, updatedProduct },
    });

  const updateProductFailed = ({ error }: Pick<ProductsState, "error">) =>
    dispatch({ type: "UPDATEPRODUCT_FAILED", payload: { error } });

  const updateProductEnded = () => dispatch({ type: "UPDATEPRODUCT_ENDED" });

  const value = {
    productsState: { ...state },
    fetchProductsRequest,
    fetchProductsSuccessed,
    fetchProductsFailed,
    fetchProductsEnded,

    addProductRequest,
    addProductSuccessed,
    addProductFailed,
    addProductEnded,

    updateProductRequest,
    updateProductSuccessed,
    updateProductFailed,
    updateProductEnded,
  };

  return (
    <ProdutsContext.Provider value={value}>{children}</ProdutsContext.Provider>
  );
};

export function useProducts() {
  const context = useContext(ProdutsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }

  return context;
}
