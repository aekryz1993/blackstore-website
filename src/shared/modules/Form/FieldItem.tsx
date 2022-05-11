import { SimpleInput } from "../../../styles/components/Input";
import { OneField } from "../../../shared/constants/types";
import { forwardRef, Ref } from "react";
import { Item } from "../../../styles/components/Item";
import { ErrorText } from "../../../styles/components/Text";

interface FieldType {
  fieldClsName?: string | undefined;
  field: OneField;
  errors: {
    [x: string]: string;
  };
}

const FiledItem = forwardRef(
  ({ fieldClsName, field, errors }: FieldType, ref: Ref<HTMLInputElement>) => (
    <Item className={fieldClsName} key={field.name}>
      <SimpleInput
        type={field.type}
        placeholder={field.placeholder}
        name={field.name}
        ref={ref}
        dataTestid={field.name}
      />
      {errors[field.name] && <ErrorText>{errors[field.name]}</ErrorText>}
    </Item>
  )
);

export default FiledItem;
