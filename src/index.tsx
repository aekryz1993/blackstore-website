import ReactDOM from "react-dom";
import App from "./App/components/App";
import { GlobalWrapper } from "./shared/helpers/wrappers";
import Provider from "./shared/providers";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.stop();
}

ReactDOM.render(
  <Provider>
    <GlobalWrapper>
      <App />
    </GlobalWrapper>
  </Provider>,
  document.getElementById("root")
);
