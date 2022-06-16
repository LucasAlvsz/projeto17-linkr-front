import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        text-decoration: none;
        outline: 0;
        margin: 0;
        padding: 0;
    }
    
    button {
        cursor: pointer;
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
        --prymary-font: font-family: "Lato", sans-serif;
        --secondary-font: font-family: "Oswald", sans-serif;
    }
`;
