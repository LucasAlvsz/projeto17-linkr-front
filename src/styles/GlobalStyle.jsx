import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
    }
    html, body, #root {
        background-color:#333333;
        height: 100vh;
        width: 100vw;
    }
    :root {
        --color-backScreen: #333333;
        --color-header:#151515;
        --color-buttons: #1877F2;
    }
`;
