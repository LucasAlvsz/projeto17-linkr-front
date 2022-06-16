import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: calc(100vh - 72px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    margin-top: 72px;
    /* padding-top: 72px; */
`;

export const HashtagName = styled.h1`
    width: 100%;
    height: auto;
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: var(--secondary-color);
    margin: 53px 0 41px;
`;

export const PostsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
