import styled from "styled-components";

export const PostContainer = styled.div`
    width: 100%;
    height: 232px;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    padding: 10px 15px;
`;

export const PostSideContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PostImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 26.5px;
`;

export const PostContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
`;

export const PostUserName = styled.p`
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 7px;
`;

export const PostText = styled.p`
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #b7b7b7;
    margin-bottom: 13px;
`;

export const PostLinkPreviewContainer = styled.div`
    width: 288px;
    height: 115px;
    display: flex;
    align-items: center;
    border: 1px solid #4d4d4d;
    border-radius: 11px;
`;

export const PostLinkContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px 11px;
    font-weight: 400;
`;

export const PostLinkTitle = styled.h1`
    font-family: var(--primary-font);
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
    margin-bottom: 4px;
`;

export const PostLinkDescription = styled.p`
    font-family: var(--primary-font);
    font-size: 9px;
    line-height: 11px;
    color: #9b9595;
    margin-bottom: 4px;
`;

export const PostLinkUrl = styled.a`
    font-family: var(--primary-font);
    font-size: 9px;
    line-height: 11px;
    color: #cecece;
`;

export const PostLinkImage = styled.img`
    width: 95px;
    height: 115px;
    border-radius: 0px 12px 13px 0px;
`;
