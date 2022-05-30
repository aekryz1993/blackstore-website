import { Field, OneField } from "@shared/constants/types";
import { IFormInputAdmin, IFormInputPermissions } from "../type";

export const adminFields: (
  adminValues?: Partial<IFormInputAdmin>
) => OneField = (adminValues) => ({
  id: 0,
  type: "checkbox",
  name: "isAdmin",
  placeholder: "Admin",
  required: "this is required",
  value: adminValues?.isAdmin,
});

export const permissionsFields: (
  adminValues?: Partial<IFormInputPermissions>
) => Readonly<Field[]> = (adminValues) => [
  {
    id: 0,
    type: "checkbox",
    name: "addProduct",
    placeholder: "Add Product",
    value: adminValues?.addProduct,
  },
  {
    id: 1,
    type: "checkbox",
    name: "updateProductPrice",
    placeholder: "UpdateP Product Price",
    value: adminValues?.addProduct,
  },
  {
    id: 2,
    type: "checkbox",
    name: "updateProduct",
    placeholder: "UpdateP Product",
    value: adminValues?.updateProduct,
  },
  {
    id: 3,
    type: "checkbox",
    name: "addUser",
    placeholder: "Add User",
    value: adminValues?.addUser,
  },
  {
    id: 4,
    type: "checkbox",
    name: "viewUser",
    placeholder: "View User",
    value: adminValues?.viewUser,
  },
  {
    id: 5,
    type: "checkbox",
    name: "updateUser",
    placeholder: "Update User",
    value: adminValues?.updateUser,
  },
  {
    id: 6,
    type: "checkbox",
    name: "updateCredit",
    placeholder: "Update Credit",
    value: adminValues?.updateCredit,
  },
  {
    id: 7,
    type: "checkbox",
    name: "updatePermissions",
    placeholder: "Update Permissions",
    value: adminValues?.updatePermissions,
  },
  {
    id: 8,
    type: "checkbox",
    name: "viewcmnd",
    placeholder: "View Commands",
    value: adminValues?.viewcmnd,
  },
  {
    id: 9,
    type: "checkbox",
    name: "confirmPayment",
    placeholder: "Confirm Payment",
    value: adminValues?.confirmPayment,
  },
];
