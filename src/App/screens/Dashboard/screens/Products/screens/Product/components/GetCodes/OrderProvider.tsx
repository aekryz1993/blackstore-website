import { Dispatch } from "@src/shared/constants/types";
import { useMemoCompare } from "../../../../../../../../../shared/helpers/util";
import React, { useReducer, createContext, useContext } from "react";
import currency from "currency.js";

type ActionType =
  | "INITIATE"
  | "DECREMENT"
  | "INCREMENT"
  | "FOCUS"
  | "CHANGE"
  | "ENDCHANGE"
  | "RESET";

export interface Action {
  type: ActionType;
  payload?: Record<any, any>;
}

export interface OrderType {
  id: string;
  label: string;
  quantity: string | number;
}

interface StateType {
  order: OrderType[] | null;
  totalAmount: number;
}

export interface ContextTypeDef {
  orderState: StateType;
  initiateOrder: Dispatch;
  decrementQuantity: Dispatch;
  incrementQuantity: Dispatch;
  focusQuantity: Dispatch;
  changeQuantity: Dispatch;
  endChangeQuantity: Dispatch;
  resetQuantity: Dispatch;
}

type ContextType = ContextTypeDef | undefined;

const initialState: StateType = {
  order: null,
  totalAmount: 0,
};

const reducer = (state: Readonly<StateType>, action: Action) => {
  const actions = {
    INITIATE: () => ({
      ...state,
      order: action.payload?.initialOrder,
    }),
    DECREMENT: () => {
      const newOrder = state.order?.length && [...state.order];
      if (
        newOrder &&
        action.payload?.index >= 0 &&
        newOrder[action.payload?.index].quantity > 0
      ) {
        const quantity = Number(newOrder[action.payload?.index].quantity);
        newOrder[action.payload?.index].quantity = quantity - 1;
        return {
          ...state,
          order: newOrder,
          totalAmount: Number(
            currency(state.totalAmount).subtract(action.payload?.price)
          ),
        };
      }

      return state;
    },
    INCREMENT: () => {
      const newOrder = state.order?.length && [...state.order];
      if (newOrder && action.payload?.index >= 0) {
        const quantity = Number(newOrder[action.payload?.index].quantity);
        newOrder[action.payload?.index].quantity = quantity + 1;
        return {
          ...state,
          order: newOrder,
          totalAmount: Number(
            currency(state.totalAmount).add(action.payload?.price)
          ),
        };
      }
      return state;
    },
    FOCUS: () => {
      const newOrder = state.order?.length && [...state.order];
      if (newOrder) {
        newOrder[action.payload?.index].quantity = "";
      }
      return {
        ...state,
        order: newOrder,
      };
    },
    CHANGE: () => {
      const newOrder = state.order?.length && [...state.order];
      if (newOrder) {
        newOrder[action.payload?.index].quantity = action.payload?.newQuantity;
      }
      return {
        ...state,
        order: newOrder,
      };
    },
    ENDCHANGE: () => {
      const newOrder = state.order?.length && [...state.order];
      if (newOrder) {
        const quantity = Number(newOrder[action.payload?.index].quantity);
        const prevQuantityPrice =
          action.payload?.prevQuantity * action.payload?.price;
        const newQuantityPrice = quantity * action.payload?.price;

        return {
          ...state,
          order: newOrder,
          totalAmount: Number(
            currency(state.totalAmount)
              .subtract(prevQuantityPrice)
              .add(newQuantityPrice)
          ),
        };
      }
      return state;
    },
    RESET: () => ({
      order: null,
      totalAmount: 0,
    }),

    DEFAULT: () => state,
  };

  return (actions[action.type] || actions["DEFAULT"])();
};

const OrderContext = createContext<ContextType>(undefined);

export const OrderProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initiateOrder = ({ initialOrder }: { initialOrder: OrderType }) =>
    dispatch({ type: "INITIATE", payload: { initialOrder } });

  const decrementQuantity = ({
    price,
    index,
  }: {
    price: number;
    index: number;
  }) => dispatch({ type: "DECREMENT", payload: { price, index } });

  const incrementQuantity = ({
    price,
    index,
  }: {
    price: number;
    index: number;
  }) => dispatch({ type: "INCREMENT", payload: { price, index } });

  const focusQuantity = ({ index }: { index: number }) =>
    dispatch({ type: "FOCUS", payload: { index } });

  const changeQuantity = ({
    newQuantity,
    index,
  }: {
    newQuantity: number;
    index: number;
  }) => dispatch({ type: "CHANGE", payload: { newQuantity, index } });

  const endChangeQuantity = ({
    prevQuantity,
    price,
    index,
  }: {
    prevQuantity: number;
    price: number;
    index: number;
  }) =>
    dispatch({
      type: "ENDCHANGE",
      payload: { prevQuantity, price, index },
    });

  const resetQuantity = () => dispatch({ type: "RESET" });

  const value = {
    orderState: { ...state },
    initiateOrder,
    decrementQuantity,
    incrementQuantity,
    focusQuantity,
    changeQuantity,
    endChangeQuantity,
    resetQuantity,
  };

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
};

export const useOrder = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within a OrderProvider");
  }

  return context;
};

export const useMemoOrder = () => {
  const { orderState } = useOrder();

  const order = useMemoCompare(orderState.order, (prev, next) => {
    if (!prev || !prev.length) return false;
    if (prev.length !== next.length) return false;
    for (let index in prev) {
      if (prev[index].id !== next[index].id) return false;
    }
    return true;
  });

  return { order, totalAmount: orderState.totalAmount };
};
