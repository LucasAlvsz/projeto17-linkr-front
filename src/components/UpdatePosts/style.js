import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    height: 61px;
    background-color: var(--color-button);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin: 2% 0;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
        color: var(--secondary-color);
        font-weight: 400;
        font-size: 16px;
        font-family: var(--primary-font);
    }
`;
export const Text = styled.div`
    display: flex;
    color: var(--secondary-color);
`;
export const Icon = styled.div`
    color: var(--secondary-color);
    font-size: 18px;
    margin-left: 10px;
`;
