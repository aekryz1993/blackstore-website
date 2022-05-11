import { Field } from "../../../shared/constants/types";
import { SubmitErrorHandler } from "react-hook-form";
import { Status } from "../../../Enums";
import { FC, FormEvent, RefObject } from "react";

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
  fields: Readonly<Field[]>;
  refs: RefObject<HTMLInputElement>[];
  status?: Status;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  formClsname?: string;
  fieldClsName?: string;
}

export interface FormTypes extends CommonFormTypes {
  cancelBtn?: FC;
  textBtn: string;
}

export interface FormWithHeadTypes extends CommonFormTypes {
  cancel: () => void;
  headerTitle: string;
  // errors: { [key: string]: string };
  // setErrors: Dispatch<React.SetStateAction<{}>>;
}
