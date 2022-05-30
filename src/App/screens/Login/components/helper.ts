import { Field } from "@shared/constants/types";

export const loginFields: Readonly<Field[]> = [
  {
    id: 0,
    type: "text",
    placeholder: "Username",
    name: "username",
    required: "this is required",
    minLength: {
      value: 5,
      message: "min length is 5",
    },
  },
  {
    id: 1,
    type: "password",
    placeholder: "Password",
    name: "password",
    required: "this is required",
    minLength: {
      value: 8,
      message: "min length is 8",
    },
  },
];
