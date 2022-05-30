import {
  BottomBtnsFormType,
  FormType,
} from "../../../../shared/modules/Form/types";

export type IFormInput = {
  username: string | undefined;
  password: string | undefined;
};

export type IFormInputFilled = {
  username: string;
  password: string;
};

export type Props = Pick<FormType, "refs" | "status" | "onSubmit"> &
  Pick<BottomBtnsFormType, "secondBtn"> & { error?: null | string | undefined };
