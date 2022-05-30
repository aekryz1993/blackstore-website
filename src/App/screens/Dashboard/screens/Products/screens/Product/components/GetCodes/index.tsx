import { Dispatch, SetStateAction } from "react";
import Modal from "../../../../../../../../../shared/modules/Modal";
import { useCodes } from "../../../../../../../../../shared/providers/CodesProvider";
import Form from "./GetCodeForm";
import { useMemoOrder } from "./OrderProvider";
import useFetchCodes from "./useFetchCodes";
import { downloadFileApi } from "../../../../../../../../../apis";

const GetCodes: React.FC<{
  setisopen: Dispatch<SetStateAction<boolean>>;
  isopen: boolean;
  serviceName: string | undefined;
}> = ({ setisopen, isopen, serviceName }) => {
  const {
    codesState,
    fetchCodesRequest,
    fetchCodesSuccessed,
    fetchCodesFailed,
    fetchCodesEnded,
  } = useCodes();

  const { order, totalAmount } = useMemoOrder();

  const { onSubmit, savedFetchCodesEnded, categories, token } = useFetchCodes({
    fetchCodesRequest,
    fetchCodesSuccessed,
    fetchCodesFailed,
    fetchCodesEnded,
    order,
    serviceName,
  });

  const handleCancel = () => {
    fetchCodesEnded();
    setisopen(false);
  };

  const downloadHandler = () => {
    async function downloadFile() {
      await downloadFileApi(codesState.fileUrl as string, token as string);
    }
    if (token && codesState.fileUrl) downloadFile();
  };

  return (
    <Modal isopen={isopen}>
      <Form
        onSubmit={onSubmit}
        status={codesState.status}
        handleCancel={handleCancel}
        endAction={savedFetchCodesEnded}
        fileUrl={codesState.fileUrl}
        downloadHandler={downloadHandler}
        order={order}
        totalAmount={totalAmount}
        categories={categories}
      />
    </Modal>
  );
};

export default GetCodes;
