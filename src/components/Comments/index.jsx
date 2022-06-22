import * as S from "./styles";

const Comments = ({ userId, currentUserId, comment, username, pictureUrl }) => {
    return (
        <S.CommentContainer>
            <img src={pictureUrl} />
            <S.CommentContent>
                <S.CommentUserInfo>
                    <S.CommentUserName>{username}</S.CommentUserName>
                    <S.CommentUserStatus>
                        {userId === currentUserId && "• post's author"}
                    </S.CommentUserStatus>
                </S.CommentUserInfo>
                <S.CommentText>{comment}</S.CommentText>
            </S.CommentContent>
        </S.CommentContainer>
    );
};

export default Comments;
