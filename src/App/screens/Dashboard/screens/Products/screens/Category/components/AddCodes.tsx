import { Fragment, useState } from "react";
import { Button } from "../../../../../../../../styles/components/Button";
import { TextButton } from "../../../../../../../../styles/components/Text";
import Modal from "../../../../../../../../shared/modules/Modal";
import Form from "../../../../../../../../shared/modules/Form/UploadFileForm";
import { useCodes } from "../../../../../../../../shared/providers/CodesProvider";
import useAddCodes from "./useAddCodes";
import { ProductCategoriesType } from "../../../../../../../../shared/constants/types";
import { Container } from "../../../../../../../../styles/layout/Container";

const AddCodes = ({
  category,
}: {
  category: ProductCategoriesType | undefined;
}) => {
  const [isopen, setisopen] = useState(false);
  const {
    codesState,
    addCodesRequest,
    addCodesSuccessed,
    addCodesFailed,
    addCodesEnded,
  } = useCodes();

  const { onSubmit, onFileChange, fileRef, savedAddCodesEnded } = useAddCodes({
    addCodesRequest,
    addCodesSuccessed,
    addCodesFailed,
    addCodesEnded,
    categoryId: category?.id as string,
  });

  const handleCancel = () => {
    fileRef.current!.value = "";
    savedAddCodesEnded();
    setisopen(false);
  };

  const handleReset = () => {
    fileRef.current!.value = "";
  };

  return (
    <Container className="">
      <Button
        className="center-x w-4xl sm__w-3xl md__w-xl lg__w-lg xl__w-lg"
        onClick={() => setisopen(true)}
      >
        <TextButton>Add Codes</TextButton>
      </Button>
      <Container className="">
        <Modal isopen={isopen} className="">
          <Form
            status={codesState.status}
            successMsg="The codes have been successfuly added"
            errorMsg={codesState.error}
            textBtn="Add codes"
            headerTitle={category?.label as string}
            onSubmit={onSubmit}
            onFileChange={onFileChange}
            cancel={handleCancel}
            reset={handleReset}
            endAction={savedAddCodesEnded}
            fileRef={fileRef}
          />
        </Modal>
      </Container>
    </Container>
  );
};

export default AddCodes;
