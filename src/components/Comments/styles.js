import styled from "styled-components";
//import device from "../../utils/devicesSizes";

export const CommentContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #353535;
    margin-bottom: 15px;
`;

export const CommentContent = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-left: 18px;
    font-family: var(--primary-font);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
`;

export const CommentUserInfo = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-bottom: 3px;
`;

export const CommentUserName = styled.p`
    font-weight: 700;
    color: #f3f3f3;
    margin-right: 5px;
`;

export const CommentUserStatus = styled.p`
    color: #565656;
`;

export const CommentText = styled.p`
    color: #acacac;
`;
