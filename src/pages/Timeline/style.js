import styled from "styled-components";
import device from "../../utils/devicesSizes";

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 72px);
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: calc(72px + 74px);
    @media ${device.desktop} {
        margin-top: 72px;
    }
`;

export const UserData = styled.h1`
    width: 100%;
    display: flex;
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: var(--secondary-color);
    margin: 19px 17px 19px;
    display: none;
    @media ${device.desktop} {
        font-size: 43px;
        line-height: 64px;
        margin: 53px 0 41px;
        display: flex;
    }
`;

export const ContentContainer = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const PostsContainer = styled.div`
    width: auto;
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
        margin-top: 158px;
    }
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
    @media (max-width: 611px) {
        width: 100%;
    }
    margin-bottom: 16px;
    @media ${device.desktop} {
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
