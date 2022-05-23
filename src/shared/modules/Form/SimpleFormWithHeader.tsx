import { OneField } from "../../../shared/constants/types";
import { FormEvent, useEffect, useState } from "react";
import { emptyFieldsValidation, minLengthsValidation } from "./helper";
import { FormWithHeadTypes } from "./types";
import { Container } from "../../../styles/layout/Container";
import FiledItem from "./FieldItem";
import { Button, Header } from "./styles";
import { MdClose, MdNavigateNext, MdOutlineDone } from "react-icons/md";
import { Status } from "../../../Enums";
import { LoadingIcon } from "../../../styles/components/Text";
import { SimpleForm } from "../../../styles/components/Form";
import { useTheme } from "styled-components";
import { HeaderText } from "../../../styles/components/HeaderText";
import { isBtnLoading, resetInputs } from "../../../shared/helpers/util";
import { Message } from "../../../shared/components/Massage";

const Form = ({
  fields,
  refs,
  status,
  reset,
  successMsg,
  errorMsg,
  headerTitle,
  onSubmit,
  fieldClsName,
  formClsname,
  cancel,
  topElementRender,
  bottomElementRender,
  endAction,
  nextBtn,
}: FormWithHeadTypes) => {
  const [errors, setErrors] = useState({});
  const theme = useTheme();
  const secColors = theme.colors.secondary;
  const primaryColors = theme.colors.primary;

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

  const handleCancel = (_cancel: () => void) => () => {
    setErrors({});
    return _cancel();
  };

  useEffect(() => {
    if (status === Status.SUCCESS && reset && refs) resetInputs(refs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <SimpleForm onSubmit={handleSubmit(onSubmit)} className={formClsname}>
      <Header className="flex justify-between items-center h-16 w-full">
        <Button type="reset" onClick={handleCancel(cancel)}>
          <MdClose size={20} color={secColors.danger} />
        </Button>
        <HeaderText>{headerTitle}</HeaderText>
        <Button
          type="submit"
          disabled={isBtnLoading && isBtnLoading(status as Status)}
        >
          {isBtnLoading && isBtnLoading(status as Status) ? (
            <LoadingIcon text="Loading" />
          ) : nextBtn ? (
            <MdNavigateNext size={30} color={primaryColors.light} />
          ) : (
            <MdOutlineDone size={20} color={secColors.success} />
          )}
        </Button>
      </Header>
      {successMsg && errorMsg && (
        <Message
          endAction={endAction}
          success={successMsg}
          error={errorMsg}
          status={status}
        />
      )}
      <Container className="flex flex-col justify-between gap-6 py-16 px-8">
        {topElementRender?.({})}
        {Array.isArray(fields) &&
          fields.map((field) =>
            field.fields ? (
              <Container className={field.className} key={field.name}>
                {Array.isArray(field.fields) &&
                  field.fields.map((_field: OneField) => (
                    <FiledItem
                      key={_field.name}
                      fieldClsName={fieldClsName}
                      field={_field}
                      ref={refs && refs[_field.id as number]}
                      errors={errors}
                    />
                  ))}
              </Container>
            ) : (
              <FiledItem
                key={field.name}
                fieldClsName={fieldClsName}
                field={field}
                ref={refs && refs[field.id as number]}
                errors={errors}
              />
            )
          )}
        {bottomElementRender?.({})}
      </Container>
    </SimpleForm>
  );
};

export default Form;
