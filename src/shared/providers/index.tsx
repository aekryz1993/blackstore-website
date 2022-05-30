import { FC } from "react";
import { AuthProvider } from "./AuthProvider";
import { NavbarProvider } from "./NavbarContext";
import { ProductsProvider } from "./ProductsProvider";
import { CategoriesProvider } from "./CategoriesProvider";
import { CodesProvider } from "./CodesProvider";
import { UsersProvider } from "./UsersProvider";

const Provider: FC = ({ children }) => (
  <AuthProvider>
    <UsersProvider>
      <ProductsProvider>
        <CategoriesProvider>
          <CodesProvider>
            <NavbarProvider>{children}</NavbarProvider>
          </CodesProvider>
        </CategoriesProvider>
      </ProductsProvider>
    </UsersProvider>
  </AuthProvider>
);
export default Provider;
