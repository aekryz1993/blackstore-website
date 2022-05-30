import { useState } from "react";
import Form from "../../../../shared/modules/Form";
import { Props } from "./type";
import { loginFields } from "./helper";
import FieldItems from "../../../../shared/modules/Form/FieldItems";
import BottomBtnsForm from "../../../../shared/modules/Form/BottomBtnsForm";

const LoginForm = ({ onSubmit, status, refs }: Props) => {
  const [errors, setErrors] = useState({});
  return (
    <Form
      onSubmit={onSubmit}
      fields={loginFields}
      formClsname="flex flex-col gap-10"
      status={status}
      setErrors={setErrors}
      refs={refs}
    >
      <FieldItems
        fields={loginFields}
        refs={refs}
        errors={errors}
        status={status}
      />
      <BottomBtnsForm status={status} textBtn="Log in" />
    </Form>
  );
};

export default LoginForm;
