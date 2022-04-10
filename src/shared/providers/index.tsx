import { FC } from "react";
import { AuthProvider } from "./AuthProvider";
import { NavbarProvider } from "./NavbarContext";

const Provider: FC = ({ children }) => (
  <AuthProvider>
    <NavbarProvider>{children}</NavbarProvider>
  </AuthProvider>
);
export default Provider;
