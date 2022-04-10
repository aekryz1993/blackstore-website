import { SubmitHandler } from "react-hook-form";
import { Status } from "@src/Enums";

export type IFormInput = {
  username: string | undefined;
  password: string | undefined;
};

export type IFormInputFilled = {
  username: string;
  password: string;
};

export interface Props {
  status: Status;
  error: null | string | undefined;
  onSubmit: SubmitHandler<IFormInput>;
}
