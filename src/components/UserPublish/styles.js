import styled from "styled-components";
import device from "../../utils/devicesSizes";

export const ImageUser = styled.div`
    @media (max-width: 611px) {
        display: none;
    }
    @media ${device.desktop} {
        position: absolute;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 0px;
        margin-top: 10px;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
    }
`;
export const Form = styled.form`
    width: 100%;
    height: 80%;
    @media ${device.desktop} {
        margin-top: 15px;
        width: 85%;
        height: 70%;
        margin-left: 70px;
    }
`;
export const Inputs = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const BoxPublish = styled.div`
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    position: relative;
    margin-top: 5px;
    display: flex;
    background-color: var(--secondary-color);
    width: 100%;
    height: 160px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 2px;
    @media ${device.desktop} {
        width: 611px;
        height: 209px;
        padding: 1px;
        border-radius: 16px;
    }
`;
export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 20%;
    cursor: pointer;
    .PublishButton {
        width: 112px;
        height: 22px;
        border-radius: 5px;
        border: none;
        background-color: var(--color-button);
        color: white;
        font-weight: bold;
        @media ${device.desktop} {
            height: 31px;
            margin-top: 10px;
        }
    }
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    width: 97%;
    height: 100%;
    margin: auto;
    p {
        text-align: center;
        color: #707070;
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 17px;
        margin-top: 1%;
        margin-bottom: 15px;
        @media ${device.desktop} {
            text-align: start;
            margin-top: 0;
            font-size: 20px;
        }
    }
    input {
        background: #efefef;
        border-radius: 5px;
        width: 100%;
        padding: 15px;
        ::placeholder {
            color: #949494;
        }
    }
    .inputUrl {
        height: 30px;
    }
    .inputArticle {
        height: 47px;
        margin-top: 5px;
        margin-bottom: 5px;
        @media ${device.desktop} {
            height: 66px;
        }
    }
`;
