import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../styles/theme/GlobalStyles";
import theme from "../../styles/theme/theme";

export const GlobalWrapper: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <BrowserRouter>{children}</BrowserRouter>
  </ThemeProvider>
);
