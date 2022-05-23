import { FormEvent } from "react";
import { useMultiRef } from "../../../../../../../../../shared/hooks/useMultiRef";
import { useAddUserBody } from "./addUserBodyProvider";

const useAddUser = () => {
  const { userBody, setUserBody, setPage } = useAddUserBody();

  const [firstname, lastname, username, email, phone, password] =
    useMultiRef<HTMLInputElement>(6);

  const onSubmit: (event: FormEvent<HTMLFormElement>) => void = (event) => {
    event.preventDefault();
    setUserBody({
      ...userBody,
      firstname: firstname.current?.value ?? "",
      lastname: lastname.current?.value ?? "",
      username: username.current?.value ?? "",
      email: email.current?.value ?? "",
      phone: phone.current?.value ?? "",
      password: password.current?.value ?? "",
    });
    setPage(2);
  };

  return {
    onSubmit,
    refs: [firstname, lastname, username, email, phone, password],
  };
};

export default useAddUser;
