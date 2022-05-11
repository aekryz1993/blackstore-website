import { FormTypes } from "../../../../shared/modules/Form/types";

export type IFormInput = {
  username: string | undefined;
  password: string | undefined;
};

export type IFormInputFilled = {
  username: string;
  password: string;
};

export type Props = Pick<
  FormTypes,
  "refs" | "status" | "onSubmit" | "cancelBtn"
> & { error: null | string | undefined };
