import { createGlobalStyle } from "styled-components";
import layout from "./layout";
import reset from "./reset";
import dimensions from "./dimensions";
import space from "./space";
import animation from "./animation";
import position from "./position";

const Globals = createGlobalStyle`
  ${layout}
  ${reset}
  ${dimensions}
  ${space}
  ${animation}
  ${position}
`;

export default Globals;
