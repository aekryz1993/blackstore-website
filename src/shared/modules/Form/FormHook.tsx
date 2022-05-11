import { FC } from "react";
import { Status } from "@src/Enums";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { Container } from "../../../styles/layout/Container";
import components from "../../../styles/components";
import { OneField, FormHookType } from "../../constants/types";
import { isBtnLoading } from "../../helpers/util";

const { Form, Input, ErrorText, Button, TextButton, LoadingIcon, Item } =
  components;

interface FieldType {
  fieldClsName: string | undefined;
  field: OneField;
  errors: {
    [x: string]: any;
  };
  register: UseFormRegister<FieldValues>;
}

const FiledItem: FC<FieldType> = ({
  fieldClsName,
  field,
  errors,
  register,
}) => (
  <Item className={fieldClsName} key={field.name}>
    <Input
      type={field.type}
      placeholder={field.placeholder}
      name={field.name}
      register={register}
      required={field.required}
      minLength={field.minLength}
      dataTestid={field.name}
    />
    {errors[field.name] && <ErrorText>{errors[field.name].message}</ErrorText>}
  </Item>
);

const FormHook: React.FC<FormHookType> = ({
  onSubmit,
  fields,
  fieldClsName,
  status,
  textBtn,
  formClsname,
  cancelBtn,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={formClsname}>
      {Array.isArray(fields) &&
        fields.map((field) =>
          field.fields ? (
            <Container className={field.className}>
              {Array.isArray(field.fields) &&
                field.fields.map((_field: OneField) => (
                  <FiledItem
                    fieldClsName={fieldClsName}
                    field={_field}
                    errors={errors}
                    register={register}
                  />
                ))}
            </Container>
          ) : (
            <FiledItem
              fieldClsName={fieldClsName}
              field={field}
              errors={errors}
              register={register}
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
    </Form>
  );
};

export default FormHook;
