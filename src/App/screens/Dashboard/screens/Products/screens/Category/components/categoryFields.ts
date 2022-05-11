import { Field } from "@shared/constants/types";

export const categoryFields: Readonly<Field[]> = [
  {
    id: 0,
    type: "text",
    placeholder: "Category name",
    name: "label",
    required: "this is required",
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
      },
      {
        id: 2,
        type: "text",
        placeholder: "Price €",
        name: "euro",
        required: "this is required",
      },
      {
        id: 3,
        type: "text",
        placeholder: "Price DZD",
        name: "dinnar",
        required: "this is required",
      },
    ],
    className: "flex justify-between items-center",
  },
];
