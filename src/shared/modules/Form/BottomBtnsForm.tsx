import { BottomBtnsFormType } from "./types";
import { Container } from "../../../styles/layout/Container";
import { Button } from "../../../styles/components/Button";
import { isBtnLoading } from "../../../shared/helpers/util";
import { Status } from "../../../Enums";
import { LoadingIcon, TextButton } from "../../../styles/components/Text";

const BottomBtnsForm = ({ status, textBtn, secondBtn }: BottomBtnsFormType) => {
  return (
    <Container className="flex justify-between items-center gap-8">
      {secondBtn?.({})}
      <Button
        type="submit"
        data-testid="submit"
        disabled={isBtnLoading && isBtnLoading(status as Status)}
      >
        {isBtnLoading && isBtnLoading(status as Status) ? (
          <LoadingIcon text="Loading" />
        ) : (
          <TextButton>{textBtn}</TextButton>
        )}
      </Button>
    </Container>
  );
};

export default BottomBtnsForm;
