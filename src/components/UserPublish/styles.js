import styled from "styled-components";

export const TelaCinza = styled.div`
    background-color: gray;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

export const Container = styled.div`
    position: relative;
    margin-top: 5px;
    display: flex;
    background-color: #ffffff;
    max-width: 620px;
    min-width: 375px;
    max-height: 200px;
    min-height: 160px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 2px;
`;
export const teste = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 20%;
    background-color: black;
    .PublishButton {
        width: 112px;
        height: 31px;
        border-radius: 5px;
        border: none;
        background-color: #1877f2;
        color: white;
        font-weight: bold;
    }
`;
export const Forms = styled.div`
    width: 100%;
    height: 80%;
    background-color: blue;
`;
export const Right = styled.div`
    // display: flex;
    background-color: green;
    width: 80%;
    height: 100%;
    margin-left: 10px;
`;
export const Left = styled.div`
    width: 50px;
    height: 100%;
    border-radius: 8px;
    background-color: red;
`;

export const ImageUser = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 1%;
    margin-top: 1%;
    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;
