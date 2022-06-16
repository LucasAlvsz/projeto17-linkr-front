import styled from "styled-components";

export const TrendingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 301px;
    height: 406px;
    background-color: var(--primary-color);
    border-radius: 16px;
`;

export const TrendingHeader = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #484848;
    padding-left: 16px;
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: var(--secondary-color);
`;

export const TrendingHashtagsContainer = styled.div`
    width: auto;
    height: 100%;
    padding-left: 16px;
    margin-top: 22px;
`;

export const TrendingHashtag = styled.p`
    font-family: var(--secondary-font);
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: var(--secondary-color);
    margin-bottom: 8px;
    cursor: pointer;
`;
