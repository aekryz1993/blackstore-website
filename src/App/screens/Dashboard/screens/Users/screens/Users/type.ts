export interface IFormInput {
  firstname: string | null | undefined;
  lastname: string | null | undefined;
  username: string | null | undefined;
  email: string | null | undefined;
  phone: string | null | undefined;
  password?: string | null | undefined;
}

export interface IFormInputAdmin {
  isAdmin: boolean;
}

export interface IFormInputPermissions {
  addProduct: boolean;
  updateProductPrice: boolean;
  updateProduct: boolean;
  addUser: boolean;
  viewUser: boolean;
  updateUser: boolean;
  updateCredit: boolean;
  updatePermissions: boolean;
  viewcmnd: boolean;
  confirmPayment: boolean;
}
