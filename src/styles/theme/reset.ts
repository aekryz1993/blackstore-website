import { css } from "styled-components";

const reset = css`
  :root {
    box-sizing: border-box;
    color: #fcfffc;
    background-color: #040f0f;
    /* overflow: hidden; */
  }

  * {
    box-sizing: inherit;
  }

  /* * {
    margin: 0 auto;
  } */

  * + * {
    margin-top: 1em;
  }

  .flex * {
    margin-top: 0;
  }

  body {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    min-height: 100vh;
  }

  #root {
    position: absolute;
    width: 100%;
    min-height: 100vh;
  }

  body,
  ul,
  li {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  ul li {
    list-style-type: none;
  }

  button {
    border: none;
  }
`;

export default reset;
