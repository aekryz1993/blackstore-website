import { Matcher, MatcherOptions } from "@testing-library/dom";
import { FC } from "react";
// import { SubmitHandler } from "react-hook-form";
import { Status } from "@src/Enums";

export interface Image {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  type: undefined | null | string;
  size: undefined | null | number;
  url: string;
  ServiceId: string;
  UserId: string | null;
}

export interface Permission {
  id: string;
  addProduct: boolean;
  updateProductPrice: boolean;
  updateProduct: boolean;
  addUser: boolean;
  viewUser: boolean;
  updateUser: boolean;
  updateCredit: boolean;
  updatePermissions: boolean;
  viewcmnd: boolean;
  confirmPayment: boolean;
  createdAt: Date;
  updatedAt: Date;
  UserId: string;
}

export interface Wallet {}

export interface CodesType {
  id: string;
  codes: string;
  Serial: string;
  Date: string;
  sold: boolean;
  createdAt: Date;
  updatedAt: Date;
  ProductCategoryId: string | null;
  UserId: string | null;
  CommandId: string | null;
}

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  fullname: string;
  email: string;
  phone: string;
  isVerified: boolean;
  isActive: boolean;
  isAdmin: boolean;
  auth: boolean;
  Image?: Image | null;
  Permission: Permission;
  Wallet?: Wallet | null;
}

export interface Price {
  id: string;
  dollar: number;
  euro: number;
  dinnar: number;
  createdAt: Date;
  updatedAt: Date;
  ProductCategoryId: string | null;
  ProductIDId: string | null;
}

export interface ProductCategoriesType {
  id: string;
  label: string;
  createdAt: Date;
  updatedAt: Date;
  ServiceId: string;
  Price: Price;
}

export interface Product {
  id: string;
  label: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  ProductCategories: ProductCategoriesType[] | [];
  Image: Image | null;
}

export type Dispatch = (...args: any) => void;

export interface RouteType {
  name: string;
  path: string;
  Component: FC<{ routes?: RouteType[] }>;
  routes?: RouteType[];
}

export type IGetTextById = (<T extends HTMLElement = HTMLElement>(
  id: Matcher,
  options?: MatcherOptions | undefined
) => T) &
  ((id: Matcher, options?: MatcherOptions | undefined) => HTMLElement);

export interface OneField {
  id: number;
  type: string;
  placeholder?: string;
  name: string;
  value?: string | undefined | null | boolean;
  required?: string;
  minLength?: Readonly<{
    value: number;
    message: string;
  }>;
}

export type Field =
  | OneField
  | {
      fields: Readonly<OneField[]>;
      className: string;
    };

// export interface FormHookType {
//   onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
//   fields: Readonly<Field[]>;
//   fieldClsName?: string;
//   formClsname?: string;
//   status?: Status;
//   textBtn: string;
//   cancelBtn?: FC;
// }

export interface CodesState {
  codes: CodesType[] | [];
  fileUrl: string | null;
  commands: { [key: string]: number }[] | null;
  status: Status;
  error: string | undefined | null;
}

export type CodesActionType =
  | "ADDCODES_REQUEST"
  | "ADDCODES_SUCCEED"
  | "ADDCODES_FAILED"
  | "ADDCODES_ENDED"
  | "FETCHCODES_REQUEST"
  | "FETCHCODES_SUCCEED"
  | "FETCHCODES_FAILED"
  | "FETCHCODES_ENDED";

export interface CodesAction {
  type: CodesActionType;
  payload?: Record<any, any>;
}

export interface UsersState {
  users: User[] | [];
  currentUsers: User[] | [];
  page: number;
  totalPages: number;
  totalUsers: number;
  status: Status;
  error: string | undefined | null;
}

export type UsersActionType =
  | "FETCHUSERS_REQUEST"
  | "FETCHUSERS_SUCCEED"
  | "FETCHUSERS_FAILED"
  | "FETCHUSERS_ENDED"
  | "FETCHPREVUSERS"
  | "FETCHNEXTUSERS"
  | "ADDUSER_REQUEST"
  | "ADDUSER_SUCCEED"
  | "ADDUSER_FAILED"
  | "ADDUSER_ENDED"
  | "UPDATEUSER_REQUEST"
  | "UPDATEUSER_SUCCEED"
  | "UPDATEUSER_FAILED"
  | "UPDATEUSER_ENDED";

export interface UsersAction {
  type: UsersActionType;
  payload?: Record<any, any>;
}

export type MouseEventHandlerType<T> = (
  event: React.MouseEvent<T, MouseEvent>
) => void;
