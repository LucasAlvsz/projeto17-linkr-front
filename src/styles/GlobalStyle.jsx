import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
    }
    html, body, #root {
        height: 100vh;
        width: 100vw;
    }
`;
