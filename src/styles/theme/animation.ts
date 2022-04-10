import { css } from "styled-components";

const animation = css`
  .spinner {
    animation: spin infinite 5s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default animation;
