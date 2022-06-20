import styled from "styled-components";
import device from "../../utils/devicesSizes";
export const Container = styled.div`
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: rgba(255, 255, 255, 0.9);
`;
export const CenterBox = styled.div`
    min-width: 70%;
    height: 25%;
    background-color: #333333;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media ${device.desktop} {
        min-width: 35%;
        height: 220px;
    }
`;
export const Text = styled.div`
    margin: auto;
    width: 60%;
    h1 {
        color: var(--secondary-color);
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 25px;
        text-align: center;
        @media ${device.desktop} {
            font-size: 25px;
            line-height: 41px;
        }
    }
`;
export const Buttons = styled.div`
    width: 300px;
    height: 100px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button {
        background-color: var(--color-input);
        width: 134px;
        height: 37px;
        border-radius: 5px;
        color: var(--color-button);
        font-weight: bold;
    }
    .blue {
        background-color: var(--color-button);
        color: var(--color-input);
        font-weight: bold;
    }
`;
