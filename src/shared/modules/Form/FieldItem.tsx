import { Input, InputCheckbox } from "../../../styles/components/Input";
import { OneField } from "../../../shared/constants/types";
import { forwardRef, Ref } from "react";
import { Item } from "../../../styles/components/Item";
import { ErrorText } from "../../../styles/components/Text";

interface FieldType {
  fieldClsName?: string | undefined;
  field: OneField;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  errors?: {
    [x: string]: string;
  };
}

const FiledItem = forwardRef(
  (
    { fieldClsName, field, errors, onChange }: FieldType,
    ref?: Ref<HTMLInputElement>
  ) => (
    <Item className={fieldClsName} key={field.name}>
      {field.type === "checkbox" ? (
        <InputCheckbox
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={field.value as string}
          ref={ref}
          onChange={onChange}
          datatestid={field.name}
        />
      ) : (
        <Input
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          defaultValue={field.value as string}
          ref={ref}
          datatestid={field.name}
        />
      )}
      {errors && errors[field.name] && (
        <ErrorText>{errors[field.name]}</ErrorText>
      )}
    </Item>
  )
);

export default FiledItem;
