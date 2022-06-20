import styled from "styled-components";
import device from "../../utils/devicesSizes";

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    gap: 21px;
    padding: 40px 23px;

    a {
        display: flex;
        justify-content: center;

        font-family: var(--primary-font);
        font-size: 17px;
        text-decoration-line: underline;

        color: #ffffff;
    }

    @media ${device.desktop} {
        width: 50%;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 11px;
    @media ${device.desktop} {
        margin-top: 150px;
    }

    button,
    input {
        width: 100%;
        height: 55px;

        border-radius: 6px;

        font-size: 22px;
        font-family: var(--secondary-font);

        font-weight: 700;
    }

    input {
        text-indent: 17px;
    }

    button {
        background-color: #1877f2;
        color: white;
    }
`;

export const AuthContainer = styled.div`
    @media ${device.desktop} {
        display: flex;
    }
`;
