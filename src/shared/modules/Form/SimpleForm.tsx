import { OneField } from "../../../shared/constants/types";
import { FormEvent, useState } from "react";
import { emptyFieldsValidation, minLengthsValidation } from "./helper";
import { FormTypes } from "./types";
import { Container } from "../../../styles/layout/Container";
import FiledItem from "./FieldItem";
import { Button } from "../../../styles/components/Button";
import { isBtnLoading } from "../../../shared/helpers/util";
import { Status } from "../../../Enums";
import { LoadingIcon, TextButton } from "../../../styles/components/Text";
import { SimpleForm } from "../../../styles/components/Form";

const Form = ({
  fields,
  refs,
  status,
  textBtn,
  onSubmit,
  fieldClsName,
  formClsname,
  cancelBtn,
}: FormTypes) => {
  const [errors, setErrors] = useState({});

  const handleSubmit =
    (_onSubmit: (e: FormEvent<HTMLFormElement>) => void) =>
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      let anyError = false;

      anyError = emptyFieldsValidation(fields as OneField[], setErrors, refs);
      if (anyError) return;

      anyError = minLengthsValidation(fields as OneField[], setErrors, refs);
      if (anyError) return;

      if (!anyError) {
        return _onSubmit(e);
      }
    };

  return (
    <SimpleForm onSubmit={handleSubmit(onSubmit)} className={formClsname}>
      {Array.isArray(fields) &&
        fields.map((field) =>
          field.fields ? (
            <Container className={field.className} key={field.name}>
              {Array.isArray(field.fields) &&
                field.fields.map((_field: OneField) => (
                  <FiledItem
                    key={_field.name}
                    fieldClsName={fieldClsName}
                    field={field}
                    ref={refs[_field.id]}
                    errors={errors}
                  />
                ))}
            </Container>
          ) : (
            <FiledItem
              key={field.name}
              fieldClsName={fieldClsName}
              field={field}
              ref={refs[field.id]}
              errors={errors}
            />
          )
        )}

      <Container className="flex justify-between items-center">
        {cancelBtn?.({})}
        <Button
          type="submit"
          data-testid="submit"
          disabled={isBtnLoading && isBtnLoading(status as Status)}
        >
          {isBtnLoading && isBtnLoading(status as Status) ? (
            <LoadingIcon text="Loading" />
          ) : (
            <TextButton>{textBtn}</TextButton>
          )}
        </Button>
      </Container>
    </SimpleForm>
  );
};

export default Form;
