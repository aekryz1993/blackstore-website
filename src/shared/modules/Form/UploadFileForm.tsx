import { UploadFileFormType } from "./types";
import { Container } from "../../../styles/layout/Container";
import { Button, Header } from "./styles";
import { MdClose } from "react-icons/md";
import { Status } from "../../../Enums";
import { LoadingIcon, TextButton } from "../../../styles/components/Text";
import { SimpleForm } from "../../../styles/components/Form";
import { useTheme } from "styled-components";
import { HeaderText } from "../../../styles/components/HeaderText";
import { isBtnLoading } from "../../../shared/helpers/util";
import { Message } from "../../../shared/components/Massage";
import { InputButton } from "../../../styles/components/Input";
import {
  Button as SubmitButton,
  CancelButton,
} from "../../../styles/components/Button";

const Form = ({
  status,
  successMsg,
  errorMsg,
  textBtn,
  headerTitle,
  onSubmit,
  onFileChange,
  formClsname,
  cancel,
  reset,
  fileRef,
  endAction,
}: UploadFileFormType) => {
  const theme = useTheme();
  const secColors = theme.colors.secondary;

  return (
    <SimpleForm onSubmit={onSubmit} className={formClsname}>
      <Header className="flex justify-between items-center h-16 w-full">
        <Button type="reset" onClick={cancel}>
          <MdClose size={20} color={secColors.danger} />
        </Button>
        <HeaderText>{headerTitle}</HeaderText>
        <Container></Container>
      </Header>
      <Message
        endAction={endAction}
        success={successMsg}
        error={errorMsg ?? ""}
        status={status}
      />
      <Container className="flex flex-col justify-between gap-6 py-16 px-8">
        <InputButton
          type="file"
          name="file"
          content="Upload codes file"
          onChange={onFileChange}
          ref={fileRef}
        />
        <Container className="flex justify-between items-center gap-16">
          <CancelButton type="reset" onClick={reset}>
            <TextButton mode="light">Reset</TextButton>
          </CancelButton>
          <SubmitButton
            type="submit"
            data-testid="submit"
            disabled={isBtnLoading && isBtnLoading(status as Status)}
          >
            {isBtnLoading && isBtnLoading(status as Status) ? (
              <LoadingIcon text="Loading" />
            ) : (
              <TextButton>{textBtn}</TextButton>
            )}
          </SubmitButton>
        </Container>
      </Container>
    </SimpleForm>
  );
};

export default Form;
