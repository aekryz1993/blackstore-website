import { FC } from "react";
import { Status } from "@src/Enums";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import { Container } from "../../../styles/layout/Container";
import components from "../../../styles/components";
import { OneField } from "../../constants/types";
import { isBtnLoading } from "../../helpers/util";
import { Button, Header } from "./styles";
import { MdClose, MdOutlineDone } from "react-icons/md";
import { useTheme } from "styled-components";
import { FormHookType } from "./types";

const { Form, Input, ErrorText, HeaderText, LoadingIcon, Item } = components;

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
  headerTitle,
  formClsname,
  cancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const theme = useTheme();
  const secColors = theme.colors.secondary;

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={`gap-32 ${formClsname}`}>
      <Header className="flex justify-between items-center h-16 w-full">
        <Button onClick={cancel}>
          <MdClose size={20} color={secColors.danger} />
        </Button>
        <HeaderText>{headerTitle}</HeaderText>
        <Button
          type="submit"
          disabled={isBtnLoading && isBtnLoading(status as Status)}
        >
          {isBtnLoading && isBtnLoading(status as Status) ? (
            <LoadingIcon text="Loading" />
          ) : (
            <MdOutlineDone size={20} color={secColors.success} />
          )}
        </Button>
      </Header>

      <Container className="flex flex-col justify-between gap-6">
        {Array.isArray(fields) &&
          fields.map((field) =>
            field.fields ? (
              <Container className={field.className} key={field.name}>
                {Array.isArray(field.fields) &&
                  field.fields.map((_field: OneField) => (
                    <FiledItem
                      fieldClsName={fieldClsName}
                      field={_field}
                      errors={errors}
                      register={register}
                      key={_field.name}
                    />
                  ))}
              </Container>
            ) : (
              <FiledItem
                key={field.name}
                fieldClsName={fieldClsName}
                field={field}
                errors={errors}
                register={register}
              />
            )
          )}
      </Container>
    </Form>
  );
};

export default FormHook;
