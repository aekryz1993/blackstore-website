import { HeaderFormType } from "./types";
import { Button, Header } from "./styles";
import { MdClose, MdOutlineDone } from "react-icons/md";
import { Status } from "../../../Enums";
import { LoadingIcon } from "../../../styles/components/Text";
import { useTheme } from "styled-components";
import { HeaderText } from "../../../styles/components/HeaderText";
import { isBtnLoading } from "../../../shared/helpers/util";

const HeaderForm = ({
  status,
  headerTitle,
  cancel,
  setErrors,
}: HeaderFormType) => {
  const theme = useTheme();
  const secColors = theme.colors.secondary;

  const handleCancel = (_cancel: () => void) => () => {
    setErrors?.({});
    return _cancel();
  };

  return (
    <Header className="flex justify-between items-center h-16 w-full">
      <Button type="reset" onClick={handleCancel(cancel)}>
        <MdClose size={20} color={secColors.danger} />
      </Button>
      <HeaderText>{headerTitle}</HeaderText>
      <Button
        type="submit"
        disabled={isBtnLoading && isBtnLoading(status as Status)}
      >
        {isBtnLoading && isBtnLoading(status as Status) ? (
          <LoadingIcon text="Loading" />
        ) : (
          <MdOutlineDone size={20} color={secColors.success} />
        )}
      </Button>
    </Header>
  );
};

export default HeaderForm;
