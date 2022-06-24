import { useContext, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TimelineContext } from "../../providers/TimelineProvider";
import { LoadingContext } from "../../providers/LoadingProvider";
import { CommentsContext } from "../../providers/CommentsProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";
// import UpdatePosts from "../../components/UpdatePosts";

import * as S from "./style";
import LoadingLottie from "../../components/LottieComponents/LoadingLottie";

const Timeline = () => {
    const navigate = useNavigate();
    const { dataPosts, catchPosts } = useContext(TimelineContext);
    const { update, loading } = useContext(LoadingContext);
    const { comments } = useContext(CommentsContext);

    useLayoutEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else catchPosts();
    }, [update, comments]);
    return (
        <>
            <Header />
            <S.Main>
                <S.TimelineContainer>{"timeline"}</S.TimelineContainer>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.UserData>timeline</S.UserData>
                        <S.UserPublishContainer>
                            <UserPublish />
                        </S.UserPublishContainer>
                        {loading ? (
                            <LoadingLottie />
                        ) : (
                            dataPosts?.map(
                                ({
                                    id,
                                    username,
                                    userPic,
                                    userId,
                                    article,
                                    link,
                                    urlMetadata,
                                    comments,
                                    isRepost,
                                    repostedBy,
                                    repostedById,
                                    repostsCount,
                                    likes,
                                    countLikes,
                                    hasLiked,
                                }) => (
                                    <Post
                                        key={isRepost ? id + Math.random() : id}
                                        postId={id}
                                        username={username}
                                        userPic={userPic}
                                        userId={userId}
                                        article={article}
                                        link={link}
                                        urlMetadata={urlMetadata}
                                        comments={comments}
                                        isRepost={isRepost}
                                        repostedBy={repostedBy}
                                        repostedById={repostedById}
                                        repostsCount={repostsCount}
                                        usersLikes={likes}
                                        countLikes={countLikes}
                                        hasLiked={hasLiked}
                                    />
                                ),
                            )
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
export default Timeline;
