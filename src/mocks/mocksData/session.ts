export const loginResponse = {
  data: {
    user: {
      id: "327a5ee3",
      firstname: "firstname",
      lastname: "lastname",
      username: "admin",
      email: "admin@hotmail.com",
      phone: "0655544444",
      isVerified: false,
      isActive: true,
      isAdmin: true,
      Image: null,
      Permission: {
        id: "c7dd78e0",
        addProduct: true,
        updateProductPrice: true,
        updateProduct: true,
        addUser: true,
        viewUser: true,
        updateUser: true,
        updateCredit: true,
        updatePermissions: true,
        viewcmnd: true,
        confirmPayment: true,
        createdAt: "2022-03-03T11:39:43.066Z",
        updatedAt: "2022-03-03T11:39:43.066Z",
        UserId: "327a5ee3",
      },
      Wallet: null,
    },
  },
};

export const token = "token_string";

export const loginBody = {
  username: "username",
  password: "Password",
};

export const faileLogin = (input: string) => {
  return input ? `${input} does't exist` : "Login Failed";
};
