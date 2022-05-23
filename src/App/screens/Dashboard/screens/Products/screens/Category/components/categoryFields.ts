import { Field } from "@shared/constants/types";
import { IFormInput } from "../../Product/components/type";

export const categoryFields: (
  categoryValues?: Partial<IFormInput>
) => Readonly<Field[]> = (categoryValues) => [
  {
    id: 0,
    type: "text",
    placeholder: "Category name",
    name: "label",
    required: "this is required",
    value: categoryValues?.label,
  },
  {
    name: "prices",
    fields: [
      {
        id: 1,
        type: "text",
        placeholder: "Price $",
        name: "dollar",
        required: "this is required",
        value: categoryValues?.dollar?.toString(),
      },
      {
        id: 2,
        type: "text",
        placeholder: "Price DZD",
        name: "dinnar",
        required: "this is required",
        value: categoryValues?.euro?.toString(),
      },
      {
        id: 3,
        type: "text",
        placeholder: "Price €",
        name: "euro",
        required: "this is required",
        value: categoryValues?.dinnar?.toString(),
      },
    ],
    className: "flex justify-between items-center",
  },
];
