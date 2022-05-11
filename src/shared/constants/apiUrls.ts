interface Url {
  [property: string]: string | ((v?: string) => string);
}

export const url: Readonly<Url> = {
  login: "api/auth/login",
  session: "api/userSession/session",
  logout: "api/userSession/logout",
  products: (type) => `api/userSession/services/getAll/${type}`,
  addProduct: "api/adminSession/services/add",
  updateProduct: "",
  addCategory: "api/adminSession/productCategory/add",
  updateCategory: (id) => `api/adminSession/productCategory/update/${id}`,
  codesCount: "",
};

function getUrl(url: string | undefined) {
  return `${process.env.REACT_APP_ORIGIN}/${url}`;
}

export default getUrl;
