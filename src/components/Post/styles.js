import styled from "styled-components";
import device from "../../utils/devicesSizes";

export const PostContainer = styled.div`
    width: 100%;
    height: 232px;
    display: flex;
    align-items: center;
    background-color: var(--primary-color);
    padding: 10px 15px 15px;
    @media ${device.mobile} {
        max-width: 611px;
        height: 276px;
        padding: 18px;
        border-radius: 16px;
    }
`;

export const PostSideContainer = styled.div`
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PostUserImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 26.5px;
    @media ${device.mobile} {
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
    @media ${device.mobile} {
        padding-left: 18px;
    }
`;

export const PostUserName = styled.p`
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #ffffff;
    margin-bottom: 7px;
    @media ${device.mobile} {
        font-size: 19px;
        line-height: 23px;
    }
`;

export const PostText = styled.p`
    font-family: var(--primary-font);
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #b7b7b7;
    margin-bottom: 13px;
    @media ${device.mobile} {
        font-size: 17px;
        line-height: 20px;
    }
`;

export const PostLinkPreviewContainer = styled.div`
    width: 100%;
    height: 115px;
    display: flex;
    border: 1px solid #4d4d4d;
    border-radius: 11px;
    @media ${device.mobile} {
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
    @media ${device.mobile} {
        padding: 24px 20px;
    }
`;

export const PostLinkTitle = styled.h1`
    font-family: var(--primary-font);
    font-size: 11px;
    line-height: 13px;
    color: #cecece;
    margin-bottom: 5px;
    @media ${device.mobile} {
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
    @media ${device.mobile} {
        font-size: 11px;
        line-height: 13px;
    }
`;

export const PostLinkUrl = styled.a`
    font-family: var(--primary-font);
    font-size: 9px;
    line-height: 11px;
    color: #cecece;
    @media ${device.mobile} {
        font-size: 11px;
        line-height: 13px;
    }
`;

export const PostLinkImage = styled.img`
    width: 95px;
    height: 115px;
    border-radius: 0px 12px 13px 0px;
    @media ${device.mobile} {
        width: 155px;
        height: 155px;
    }
`;
