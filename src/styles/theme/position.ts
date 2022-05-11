import { css } from "styled-components";

const position = css`
  .fixed {
    position: fixed;
  }
  .relative {
    position: relative;
  }
  .absolute {
    position: absolute;
  }

  .above-zIndex {
    z-index: 99;
  }

  .top-hide {
    position: fixed;
    top: -110vh;
    transform: translateY(-110vh);
  }

  .top-visible {
    position: fixed;
    top: 1.5rem;
    transform: translateY(1.5rem);
  }
`;

export default position;
