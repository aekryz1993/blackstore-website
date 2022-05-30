import { createContext, useContext, useState } from "react";
import { IFormInput, IFormInputAdmin, IFormInputPermissions } from "../../type";

export type BodyType = IFormInput &
  IFormInputAdmin & { permissions: IFormInputPermissions };

export interface UserBodyType {
  userBody: BodyType;
  setUserBody: React.Dispatch<React.SetStateAction<BodyType>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export const initialBody: BodyType = {
  firstname: null,
  lastname: null,
  username: null,
  email: null,
  phone: null,
  password: null,
  isAdmin: false,
  permissions: {
    addProduct: false,
    updateProductPrice: false,
    updateProduct: false,
    addUser: false,
    viewUser: false,
    updateUser: false,
    updateCredit: false,
    updatePermissions: false,
    viewcmnd: false,
    confirmPayment: false,
  },
};

const initialAddUserBody = {
  userBody: initialBody,
  setUserBody: () => {},
  page: 1,
  setPage: () => {},
};

const AddUserBodyContext = createContext<UserBodyType>(initialAddUserBody);

export const AddUserBodyProvider: React.FC = ({ children }) => {
  const [userBody, setUserBody] = useState(initialBody);
  const [page, setPage] = useState(1);

  return (
    <AddUserBodyContext.Provider
      value={{
        userBody,
        setUserBody,
        page,
        setPage,
      }}
    >
      {children}
    </AddUserBodyContext.Provider>
  );
};

export const useAddUserBody = () => {
  const context = useContext(AddUserBodyContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
