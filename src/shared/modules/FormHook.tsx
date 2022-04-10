import { useForm } from "react-hook-form";
import components from "../../styles/components";
import { FormHookType } from "../constants/types";
import { isBtnLoading } from "../helpers/util";

const { Form, Input, ErrorText, Button, TextButton, LoadingIcon, Item } =
  components;

const FormHook: React.FC<FormHookType> = ({
  onSubmit,
  fields,
  fieldClsName,
  status,
  textBtn,
  formClsname,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      // onReset={() => {
      //   reset({ username: undefined, password: undefined });
      // }}
      className={formClsname}
    >
      {Array.isArray(fields) &&
        fields.map((field) => (
          <Item className={fieldClsName} key={field.name}>
            <Input
              type={field.type}
              placeholder={field.placeholder}
              name={field.name}
              register={register}
              required={field.required}
              minLength={field.minLength}
              dataTestid={field.name}
            />
            {errors[field.name] && (
              <ErrorText>{errors[field.name].message}</ErrorText>
            )}
          </Item>
        ))}
      <Button
        type="submit"
        data-testid="submit"
        disabled={isBtnLoading && isBtnLoading(status)}
      >
        {isBtnLoading && isBtnLoading(status) ? (
          <LoadingIcon text="Loading" />
        ) : (
          <TextButton>{textBtn}</TextButton>
        )}
      </Button>
    </Form>
  );
};

export default FormHook;
