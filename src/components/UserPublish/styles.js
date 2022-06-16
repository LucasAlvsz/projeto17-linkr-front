import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    height: 80%;
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
`;
export const Button = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 20%;
    cursor: pointer;
    // background-color: black;
    .PublishButton {
        width: 112px;
        height: 22px;
        border-radius: 5px;
        border: none;
        background-color: var(--color-button);
        color: white;
        font-weight: bold;
    }
`;

export const Data = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
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
    }
    input {
        background: #efefef;
        border-radius: 5px;
        border: none;
        width: 100%;
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
    }
`;
