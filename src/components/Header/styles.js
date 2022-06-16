import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--color-header);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 0 14px 0 17px;
`;

export const Logo = styled.h1`
    font-family: "Passion One";
    font-weight: 700;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: var(--secondary-color);
    @media (min-width: 500px) {
        font-size: 49px;
        line-height: 54px;
    }
`;

export const UserContainer = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const UserOptionsContainer = styled.div`
    margin-right: 12px;
    .options-icon {
        font-size: 25px;
        color: var(--secondary-color);
        cursor: pointer;
        @media (min-width: 500px) {
            font-size: 18.5px;
        }
    }
`;

export const UserIcon = styled.img`
    width: 44px;
    height: 44px;
    border-radius: 26.5px;
    @media (min-width: 500px) {
        width: 53px;
        height: 53px;
    }
`;