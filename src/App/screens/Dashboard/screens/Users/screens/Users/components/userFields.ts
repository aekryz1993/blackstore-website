import { Field } from "@shared/constants/types";
import { IFormInput } from "../type";

export const userFields: (
  userValues?: Partial<IFormInput>
) => Readonly<Field[]> = (userValues) => [
  {
    name: "nameInfo",
    fields: [
      {
        id: 0,
        type: "text",
        placeholder: "Firstname",
        name: "firstname",
        required: "this is required",
        value: userValues?.firstname?.toString(),
      },
      {
        id: 1,
        type: "text",
        placeholder: "Lastname",
        name: "lastname",
        required: "this is required",
        value: userValues?.lastname?.toString(),
      },
      {
        id: 2,
        type: "text",
        placeholder: "Username",
        name: "username",
        required: "this is required",
        value: userValues?.username?.toString(),
      },
    ],
    className: "flex justify-between items-center gap-4",
  },
  {
    name: "adresses",
    fields: [
      {
        id: 3,
        type: "text",
        placeholder: "Email",
        name: "email",
        required: "this is required",
        value: userValues?.email?.toString(),
      },
      {
        id: 4,
        type: "text",
        placeholder: "Phone",
        name: "phone",
        required: "this is required",
        value: userValues?.phone?.toString(),
      },
    ],
    className: "flex justify-between items-center gap-4",
  },
];

export const userFieldsWithPassword: Readonly<Field[]> = [
  ...userFields(),
  {
    id: 5,
    type: "password",
    placeholder: "Password",
    name: "password",
    required: "this is required",
  },
];
