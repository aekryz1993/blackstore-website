import { Matcher, MatcherOptions } from "@testing-library/dom";
import { FC } from "react";
import { SubmitHandler } from "react-hook-form";
import { Status } from "@src/Enums";

export interface Image {}
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

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
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

export interface Field {
  type: string;
  placeholder: string;
  name: string;
  required: boolean | string;
  minLength: Readonly<{
    value: number;
    message: string;
  }>;
}

export interface FormHookType {
  onSubmit: SubmitHandler<any>;
  fields: Readonly<Field[]>;
  fieldClsName?: string;
  formClsname?: string;
  status: Status;
  textBtn: string;
}
