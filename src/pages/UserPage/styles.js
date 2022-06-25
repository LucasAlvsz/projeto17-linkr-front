import styled from "styled-components";
import device from "../../utils/devicesSizes";

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 146px);
    z-index: -2;
    position: absolute;
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: calc(72px + 74px);
    @media ${device.desktop} {
        margin-top: 72px;
        height: calc(100vh - 72px);
    }
`;

export const UserData = styled.h1`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: var(--secondary-color);
    margin: 19px 17px 19px;
    div {
        align-items: center;
        display: flex;
    }

    button {
        width: 112px;
        height: 31px;
        border-radius: 5px;
        background-color: var(--color-button);
        font-family: var(--primary-font);
        color: var(--secondary-color);
    }

    @media ${device.desktop} {
        button {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @media ${device.desktop} {
        font-size: 43px;
        line-height: 64px;
        margin: 53px 0 41px;
        display: flex;
    }
`;

export const ButtonFollowMobile = styled.button`
    @media ${device.sidebar} {
        width: 112px;
        height: 31px;
        border-radius: 5px;
        background-color: var(--color-button);
        font-weight: 700;
        visibility: hidden;
    }
    visibility: visible;
`;

export const ContentContainer = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const PostsContainer = styled.div`
    min-width: 612px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media ${device.sidebar} {
        margin-right: 25px;
    }
`;

export const SidebarContainer = styled.div`
    display: none;
    @media ${device.sidebar} {
        width: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-top: 68px;
    }
`;

export const ButtonFollow = styled.button`
    width: 112px;
    height: 31px;
    border-radius: 5px;
    background-color: ${({ isFollower }) =>
        isFollower ? "#1877F2" : "#FFFFFF"};
    margin-bottom: 60px;
    font-family: var(--primary-font);
    font-weight: 700;
    color: ${({ isFollower }) => (isFollower ? "#FFFFFF" : "#1877F2")};
    visibility: ${({ userId, userIdStorage }) =>
        userId == userIdStorage ? "hidden" : "visible"};
`;

export const UserImage = styled.div`
    width: 40px;
    height: 40px;
    margin: 0 18px;
    border-radius: 26.5px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    @media ${device.desktop} {
        width: 50px;
        height: 50px;
    }
`;

export const UserPublishContainer = styled.div`
    margin-bottom: 16px;
    @media ${device.desktop} {
        display: none;
    }
`;

export const TimelineContainer = styled.span`
    margin-bottom: 19px;
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 33px;
    margin-left: 17px;
    color: #ffffff;
    @media ${device.desktop} {
        display: none;
    }
`;
