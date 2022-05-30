import { ScreenContainer } from "../../styles/layout/Container";
import { LoadingIcon } from "../../styles/components/Text";

const Loading = () => {
  return (
    <ScreenContainer className="flex justify-center items-center gap-12">
      <img
        alt="LOGO"
        src="https://img.icons8.com/ios-filled/100/000000/magento.png"
      />
      <LoadingIcon size={100} />
    </ScreenContainer>
  );
};

export default Loading;
