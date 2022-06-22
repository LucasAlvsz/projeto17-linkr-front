import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { UserPageContext } from "../../providers/UserPageProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";

import * as S from "./styles";
import { LoadingContext } from "../../providers/LoadingProvider";
import { LikeContext } from "../../providers/LikeProvider";
import { CommentsContext } from "../../providers/CommentsProvider";

const UserPage = () => {
    const navigate = useNavigate();
    const { userPosts, getUserPosts } = useContext(UserPageContext);
    const { getLikes, filterLikesPost } = useContext(LikeContext);
    const { update, setUpdate } = useContext(LoadingContext);
    const { comments } = useContext(CommentsContext);
    const { id } = useParams();

    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else {
            getUserPosts(id);
            getLikes();
        }
    }, [id, update, comments]);

    return (
        <>
            <Header />
            <S.Main>
                <S.TimelineContainer>{"timeline"}</S.TimelineContainer>
                <S.UserPublishContainer>
                    <UserPublish />
                </S.UserPublishContainer>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.UserData>
                            <S.UserImage src={userPosts.userpic} />
                            {`${userPosts.username}'s Posts`}
                        </S.UserData>
                        {userPosts.posts?.map(
                            ({
                                id,
                                username,
                                userpic,
                                likes,
                                userId,
                                article,
                                link,
                                urlMetadata,
                                comments,
                            }) => (
                                <Post
                                    key={id}
                                    postId={id}
                                    username={username}
                                    userpic={userpic}
                                    userid={userId}
                                    article={article}
                                    usersLikes={filterLikesPost(id)}
                                    link={link}
                                    likes={likes}
                                    urlMetadata={urlMetadata}
                                    comments={comments}
                                    update={() => setUpdate(!update)}
                                />
                            ),
                        )}
                    </S.PostsContainer>
                    <S.SidebarContainer>
                        <Trending />
                    </S.SidebarContainer>
                </S.ContentContainer>
            </S.Main>
        </>
    );
};

export default UserPage;
