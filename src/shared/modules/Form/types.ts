import { Dispatch, Field } from "../../../shared/constants/types";
import { Status } from "../../../Enums";
import { ChangeEventHandler, FC, FormEvent, RefObject } from "react";

export interface UploadFileFormType {
  formClsname?: string;
  cancel: () => void;
  reset: () => void;
  fileRef: RefObject<HTMLInputElement>;
  headerTitle: string;
  status?: Status;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onFileChange: ChangeEventHandler<HTMLInputElement>;
  textBtn: string;
  successMsg: string;
  endAction?: Dispatch;
  errorMsg: string | null | undefined;
}

interface CommonType {
  fields?: Readonly<Field[]>;
  refs?: RefObject<HTMLInputElement>[];
  status?: Status;
  setErrors?: React.Dispatch<React.SetStateAction<{}>>;
}

export interface FormType extends CommonType {
  reset?: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formClsname?: string;
}

export type FieldItemsType = {
  fieldClsName?: string;
  topElementRender?: FC<{}>;
  bottomElementRender?: FC<{}>;
  errors?: { [key: string]: any };
  endAction?: Dispatch;
  successMsg?: string;
  errorMsg?: string;
} & Omit<CommonType, "setErrors">;

export type HeaderFormType = {
  headerTitle: string;
  cancel: () => void;
} & Pick<CommonType, "status" | "setErrors">;

export type BottomBtnsFormType = {
  textBtn: string;
  secondBtn?: FC;
} & Pick<CommonType, "status">;
