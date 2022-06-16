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
        --primary-color: #171717;
        --secondary-color:#FFFFFF;
        --color-input: #EFEFEF;
        --color-header:#151515;
        --color-button: #1877F2;
    }
`;
