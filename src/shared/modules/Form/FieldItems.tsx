import { OneField } from "../../../shared/constants/types";
import { FieldItemsType } from "./types";
import { Container } from "../../../styles/layout/Container";
import FiledItem from "./FieldItem";
import { Message } from "../../../shared/components/Massage";

const FieldItems = ({
  fields,
  refs,
  fieldClsName,
  topElementRender,
  bottomElementRender,
  errors,
  endAction,
  successMsg,
  errorMsg,
  status,
}: FieldItemsType) => {
  return (
    <Container className="flex flex-col justify-between gap-6">
      {successMsg && errorMsg && (
        <Message
          endAction={endAction}
          success={successMsg}
          error={errorMsg}
          status={status}
        />
      )}
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
  );
};

export default FieldItems;
