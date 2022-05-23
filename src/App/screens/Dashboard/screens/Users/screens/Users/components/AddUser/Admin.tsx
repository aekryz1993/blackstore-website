import { useMultiRef } from "../../../../../../../../../shared/hooks/useMultiRef";
import FiledItem from "../../../../../../../../../shared/modules/Form/FieldItem";
import { adminFields } from "../permissionsFields";
import { useAddUserBody } from "./addUserBodyProvider";

const Admin = ({
  handleChange,
  ref,
}: {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  ref: React.Ref<HTMLInputElement> | undefined;
}) => {
  // const { userBody, setUserBody } = useAddUserBody();
  // const [isAdmin] = useMultiRef<HTMLInputElement>(1);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setUserBody({
  //     ...userBody,
  //     isAdmin: event.target.checked,
  //   });
  // };

  return <FiledItem field={adminFields()} onChange={handleChange} ref={ref} />;
};

export default Admin;
