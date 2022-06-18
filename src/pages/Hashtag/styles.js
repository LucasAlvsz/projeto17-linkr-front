import styled from "styled-components";
import device from "../../utils/devicesSizes";

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 72px);
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-top: 72px;
`;

export const HashtagName = styled.h1`
    width: 100%;
    display: flex;
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 33px;
    line-height: 49px;
    color: var(--secondary-color);
    margin: 19px 17px 19px;
    margin-top: calc(45px + 19px);
    padding-left: 17px;
    @media ${device.desktop} {
        font-size: 43px;
        line-height: 64px;
        margin: 53px 0 41px;
        padding-left: 0;
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
