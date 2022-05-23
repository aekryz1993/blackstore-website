import { Dispatch, Field } from "../../../shared/constants/types";
import { SubmitErrorHandler } from "react-hook-form";
import { Status } from "../../../Enums";
import { ChangeEventHandler, FC, FormEvent, RefObject } from "react";

export interface FormHookType {
  onSubmit: SubmitErrorHandler<any>;
  fields: Readonly<Field[]>;
  fieldClsName?: string;
  formClsname?: string;
  status?: Status;
  headerTitle: string;
  cancel: () => void;
}

interface CommonFormTypes {
  fields?: Readonly<Field[]>;
  refs?: RefObject<HTMLInputElement>[];
  status?: Status;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formClsname?: string;
  fieldClsName?: string;
}

export interface FormTypes extends CommonFormTypes {
  secondBtn?: FC;
  textBtn: string;
}

export interface FormWithHeadTypes extends CommonFormTypes {
  cancel: () => void;
  headerTitle: string;
  reset?: boolean;
  nextBtn?: boolean;
  successMsg?: string;
  errorMsg?: string;
  endAction?: Dispatch;
  topElementRender?: FC<{}>;
  bottomElementRender?: FC<{}>;
}

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
