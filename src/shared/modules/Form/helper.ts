import { Dispatch, RefObject } from "react";
import { Field, OneField } from "../../../shared/constants/types";

export const isEmpty = (str: string) => !str;

export const isSmallerThen = (str: string, n: number) => str.length < n;

const conditionEmptyField = (
  field: OneField,
  setErrors: Dispatch<React.SetStateAction<{ [key: string]: any }>>,
  refs: RefObject<any>[]
) => {
  let error = false;
  if (field.required && isEmpty(refs[field.id].current.value)) {
    setErrors((prev) => ({ ...prev, [field.name]: field.required }));
    error = true;
  } else if (!isEmpty(refs[field.id].current.value)) {
    setErrors((prev) => ({ ...prev, [field.name]: null }));
  }
  return error;
};

export const emptyFieldsValidation = (
  fields: Readonly<Field[]>,
  setErrors: Dispatch<React.SetStateAction<{ [key: string]: any }>>,
  refs: RefObject<any>[]
) => {
  let anyError = false;
  Array.isArray(fields) &&
    fields.forEach((field) => {
      !field.fields
        ? (() => {
            if (conditionEmptyField(field, setErrors, refs)) anyError = true;
          })()
        : Array.isArray(fields) &&
          field.fields.forEach((_field: OneField) => {
            if (conditionEmptyField(_field, setErrors, refs)) anyError = true;
          });
    });

  return anyError;
};

const conditionMinLengthField = (
  field: OneField,
  setErrors: Dispatch<React.SetStateAction<{ [key: string]: any }>>,
  refs: RefObject<any>[]
) => {
  let error = false;
  if (
    field.minLength &&
    isSmallerThen(refs[field.id].current.value, field.minLength.value)
  ) {
    setErrors((prev) => ({
      ...prev,
      [field.name]: field.minLength?.message,
    }));
    error = true;
  } else if (!isEmpty(refs[field.id].current.value)) {
    setErrors((prev) => ({ ...prev, [field.name]: null }));
  }
  return error;
};

export const minLengthsValidation = (
  fields: Readonly<Field[]>,
  setErrors: Dispatch<React.SetStateAction<{ [key: string]: any }>>,
  refs: RefObject<any>[]
) => {
  let anyError = false;
  Array.isArray(fields) &&
    fields.forEach((field) => {
      field.fields
        ? Array.isArray(fields) &&
          field.fields.forEach((_field: OneField) => {
            if (conditionMinLengthField(_field, setErrors, refs))
              anyError = true;
          })
        : (() => {
            if (conditionMinLengthField(field, setErrors, refs))
              anyError = true;
          })();
    });

  return anyError;
};
