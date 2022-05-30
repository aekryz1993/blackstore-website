import { Field } from "../../../../../../../../shared/constants/types";
import { IFormInput } from "./type";

export const productFields: (
  productValues?: Partial<IFormInput>
) => Readonly<Field[]> = (productValues) => [
  {
    id: 0,
    type: "text",
    placeholder: "Product name",
    name: "label",
    required: "this is required",
    value: productValues?.label,
  },
];
