import { useState } from "react";
import Form from "../../../../../../../../../shared/modules/Form";
import HeaderForm from "../../../../../../../../../shared/modules/Form/HeaderForm";
import FieldItem from "./FieldItem";
import { FormType } from "../../../../../../../../../shared/modules/Form/types";
import { Container } from "../../../../../../../../../styles/layout/Container";
import { H4 } from "../../../../../../../../../styles/components/Text";
import { Message } from "../../../../../../../../../shared/components/Massage";
import {
  Dispatch,
  ProductCategoriesType,
} from "../../../../../../../../../shared/constants/types";
import { Status } from "../../../../../../../../../Enums";
import { Button } from "../../../../../../../../../styles/components/Button";
import { OrderType } from "./OrderProvider";

type TProps = Pick<FormType, "onSubmit" | "status"> & {
  handleCancel: () => void;
  endAction: Dispatch;
  fileUrl: string | null;
  downloadHandler: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  order: OrderType[];
  totalAmount: number;
  categories: ProductCategoriesType[];
};

const GetCodesForm = ({
  onSubmit,
  status,
  handleCancel,
  endAction,
  fileUrl,
  downloadHandler,
  order,
  totalAmount,
  categories,
}: TProps) => {
  const [, setErrors] = useState({});

  return (
    <Form status={status} onSubmit={onSubmit} setErrors={setErrors}>
      <HeaderForm
        status={status}
        headerTitle="Withdraw codes"
        cancel={handleCancel}
        setErrors={setErrors}
      />
      {fileUrl && (
        <Button onClick={downloadHandler}>Download the codes file</Button>
      )}
      {(status === Status.ERROR || status === Status.SUCCESS) && (
        <Message
          endAction={endAction}
          success="Completed successfully"
          error="error"
          status={status}
        />
      )}
      <Container className="flex flex-col gap-8 items-center pt-8">
        {categories &&
          order &&
          order.length &&
          categories.map((category) => (
            <FieldItem
              key={category.id}
              price={category.Price.dinnar}
              order={order}
              id={category.id}
            />
          ))}
        <Container>
          <H4>{totalAmount}</H4>
        </Container>
      </Container>
    </Form>
  );
};

export default GetCodesForm;
