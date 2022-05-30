import { OneField } from "../../../shared/constants/types";
import React, { FormEvent, useEffect } from "react";
import { emptyFieldsValidation, minLengthsValidation } from "./helper";
import { FormType } from "./types";
import { Status } from "../../../Enums";
import { SimpleForm } from "../../../styles/components/Form";
import { resetInputs } from "../../../shared/helpers/util";

const Form: React.FC<FormType> = ({
  fields,
  refs,
  status,
  reset,
  onSubmit,
  formClsname,
  setErrors,
  children,
}) => {
  const handleSubmit =
    (_onSubmit: (e: FormEvent<HTMLFormElement>) => void) =>
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let anyError = false;

      anyError = refs
        ? emptyFieldsValidation(fields as OneField[], setErrors, refs)
        : false;

      if (anyError) return;

      anyError = refs
        ? minLengthsValidation(fields as OneField[], setErrors, refs)
        : false;
      if (anyError) return;

      if (!anyError) {
        return _onSubmit(e);
      }
    };

  useEffect(() => {
    if (status === Status.SUCCESS && reset && refs) resetInputs(refs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, reset]);

  return (
    <SimpleForm onSubmit={handleSubmit(onSubmit)} className={formClsname}>
      {children}
    </SimpleForm>
  );
};

export default Form;
