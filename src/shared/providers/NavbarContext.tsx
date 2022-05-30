import { createContext, useContext, useState } from "react";

interface NavbarCtxType {
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialValue = {
  isOpened: false,
  setIsOpened: () => {},
};

const NavebarContext = createContext<NavbarCtxType>(initialValue);

export const NavbarProvider: React.FC = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <NavebarContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </NavebarContext.Provider>
  );
};

export function useNavbar() {
  const context = useContext(NavebarContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
