import { useContext, useEffect } from "react";

import { FollowersContext } from "../../providers/FollowersProvider";

import * as S from "./styles";

const Comments = ({ userId, currentUserId, comment, username, pictureUrl }) => {
    const { followers, getFollowers } = useContext(FollowersContext);
    useEffect(() => {
        getFollowers();
    }, []);
    return (
        <S.CommentContainer>
            <img src={pictureUrl} />
            <S.CommentContent>
                <S.CommentUserInfo>
                    <S.CommentUserName>{username}</S.CommentUserName>
                    <S.CommentUserStatus>
                        {userId === currentUserId && "• post's author"}
                        {userId !== currentUserId &&
                            followers.find(
                                (follower) => follower.userId === userId,
                            ) &&
                            "• following"}
                    </S.CommentUserStatus>
                </S.CommentUserInfo>
                <S.CommentText>{comment}</S.CommentText>
            </S.CommentContent>
        </S.CommentContainer>
    );
};

export default Comments;
