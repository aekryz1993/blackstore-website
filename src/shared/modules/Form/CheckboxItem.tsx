import { OneField } from "../../constants/types";
import FiledItem from "./FieldItem";

const CheckboxItem = ({
  handleChange,
  itemRef,
  field,
}: {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  itemRef: React.Ref<HTMLInputElement> | undefined;
  field: OneField;
}) => {
  return <FiledItem field={field} onChange={handleChange} ref={itemRef} />;
};

export default CheckboxItem;
