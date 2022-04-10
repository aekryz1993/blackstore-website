import React from "react";
import Provider from "../../shared/providers";
import Auth from "./Auth";

const App: React.FC = () => {
  return (
    <Provider>
      <Auth />
    </Provider>
  );
};

export default App;
