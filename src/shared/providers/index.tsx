import { FC } from "react";
import { AuthProvider } from "./AuthProvider";
import { NavbarProvider } from "./NavbarContext";
import { ProductsProvider } from "./ProductsProvider";
import { CategoriesProvider } from "./CategoriesProvider";

const Provider: FC = ({ children }) => (
  <AuthProvider>
    <ProductsProvider>
      <CategoriesProvider>
        <NavbarProvider>{children}</NavbarProvider>
      </CategoriesProvider>
    </ProductsProvider>
  </AuthProvider>
);
export default Provider;
