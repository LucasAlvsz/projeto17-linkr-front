/* eslint-disable indent */
import styled from "styled-components";
import device from "../../utils/devicesSizes";

export const Wrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const PostContainer = styled.div`
    width: 100vw;
    height: 232px;
    display: flex;
    position: relative;
    align-items: center;
    background-color: var(--primary-color);
    padding: 10px 15px 15px;

    @media ${device.desktop} {
        max-width: 611px;
        height: 276px;
        padding: 18px;
        border-radius: ${({ openComments }) =>
            openComments ? "16px 16px 0 0" : "16px 16px 16px 16px"};
    }
`;

export const PostSideContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    > svg {
        font-size: 30px;
        margin-top: 15px;
        cursor: pointer;
    }
    > p {
        font-family: var(--primary-font);
        font-size: 11px;
        line-height: 13px;
        text-align: center;
        width: 65px;
    }
`;

export const PostUserImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 26.5px;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
    cursor: pointer;
    @media ${device.desktop} {
        width: 50px;
        height: 50px;
    }
`;

export const PostContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 15px;
    @media ${device.desktop} {
        padding-left: 18px;
    }
`;

export const PostUserName = styled.div`
    width: max-content;
    display: flex;
    justify-content: space-between;
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: var(--secondary-color);
    margin-bottom: 7px;
    cursor: pointer;
    @media ${device.desktop} {
        font-size: 19px;
        line-height: 23px;
    }
`;

export const IconsContainer = styled.div`
    position: absolute;
    top: 23px;
    right: 22px;
    display: ${({ userId, userIdStorage }) =>
        userId !== userIdStorage ? "none" : "flex"};
    .icon-post {
        font-size: 14px;

        :first-child {
            margin-right: 12px;
        }
    }
`;

export const PostText = styled.p`
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #b7b7b7;
    margin-bottom: 13px;
    > span {
        font-weight: 700;
        color: var(--secondary-color);
        cursor: pointer;
        :hover {
            text-decoration: underline;
        }
    }
    @media ${device.desktop} {
        font-size: 17px;
        line-height: 20px;
    }
`;

export const PostInput = styled.input`
    width: 100%;
    height: auto;
    min-height: 30px;
    border-radius: 7px;
    padding: 0 6px;
`;

export const PostForm = styled.form`
    width: 100%;
`;

export const PostLinkPreviewContainer = styled.a`
    width: 100%;
    height: 115px;
    display: flex;
    border: 1px solid #4d4d4d;
    border-radius: 11px;
    cursor: pointer;
    @media ${device.desktop} {
        width: 503px;
        height: 155px;
    }
`;

export const PostLinkContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px 11px;
    font-weight: 400;
    @media ${device.desktop} {
        padding: 24px 20px;
    }
`;

export const PostLinkTitle = styled.h1`
    width: 100%;
    font-family: var(--primary-font);
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
    margin-bottom: 5px;
    @media ${device.desktop} {
        font-size: 16px;
        line-height: 19px;
    }
`;

export const PostLinkDescription = styled.p`
    font-family: var(--primary-font);
    font-size: 9px;
    line-height: 11px;
    color: #9b9595;
    margin-bottom: 5px;
    @media ${device.desktop} {
        font-size: 11px;
        line-height: 13px;
    }
`;

export const PostLinkUrl = styled.p`
    font-family: var(--primary-font);
    font-size: 9px;
    line-height: 11px;
    color: #cecece;
    :hover {
        text-decoration: underline;
    }
    @media ${device.desktop} {
        font-size: 11px;
        line-height: 13px;
    }
`;

export const PostLinkImage = styled.img`
    width: 95px;
    height: 115px;
    border-radius: 0px 12px 13px 0px;
    object-fit: cover;
    @media ${device.desktop} {
        width: 155px;
        height: 155px;
    }
`;

export const CommentsContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #1e1e1e;
    padding: 20px;
    margin-bottom: 16px;
    @media ${device.desktop} {
        top: 276px;
        margin-bottom: 28px;
        border-radius: 0 0 16px 16px;
    }
    img {
        width: 40px;
        height: 40px;
        border-radius: 26.5px;
        margin-left: 5px;
        margin-bottom: 16px;
        @media ${device.desktop} {
            width: 50px;
            height: 50px;
        }
    }
`;

export const WriteCommentContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    img {
        margin-bottom: 0;
        margin-right: 15px;
    }
    form {
        width: 100%;
    }
    input {
        width: 100%;
        height: 39px;
        border-radius: 8px;
        background: #252525;
        padding: 0 15px;
        color: #acacac;
        ::placeholder {
            font-style: italic;
            letter-spacing: 0.05em;
            color: #575757;
        }
    }
`;
