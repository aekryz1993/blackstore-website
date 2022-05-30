interface Url {
  [property: string]: string | ((...[v]: any) => string);
}

export const url: Readonly<Url> = {
  login: "api/auth/login",
  session: "api/userSession/session",
  logout: "api/userSession/logout",
  users: (page) => `api/adminSession/users/getusers/${page}`,
  addUser: "api/adminSession/users/add",
  updateUser: (id) => `api/adminSession/users/update/${id}`,
  products: (type) => `api/userSession/services/getAll/${type}`,
  addProduct: "api/adminSession/services/add",
  updateProduct: (id) => `api/adminSession/services/update/${id}`,
  addCategory: "api/adminSession/productCategory/add",
  updateCategory: (id) => `api/adminSession/productCategory/update/${id}`,
  codesCount: "",
  addCodesBycategory: (categoryId) =>
    `api/adminSession/productCode/addMulti/${categoryId}`,
  getCodesBycategory: (serviceName, order) =>
    `api/adminSession/productCode/get/${serviceName}/${order}`,
};

function getUrl(url: string | undefined) {
  return `${process.env.REACT_APP_ORIGIN}/${url}`;
}

export default getUrl;
