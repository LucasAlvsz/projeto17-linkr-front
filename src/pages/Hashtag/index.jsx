import { useContext, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

import * as S from "./styles";
import { LoadingContext } from "../../providers/LoadingProvider";
import { CommentsContext } from "../../providers/CommentsProvider";
import LoadingLottie from "../../components/LottieComponents/LoadingLottie";

const Hashtag = () => {
    const navigate = useNavigate();
    const { hashtagPosts, getHashtagPosts } = useContext(TrendingContext);
    const { update, setUpdate, loading, setLoading } =
        useContext(LoadingContext);
    const { comments } = useContext(CommentsContext);
    const { hashtag } = useParams();
    useLayoutEffect(() => {
        setLoading(true);
        if (!isLogged()) navigate("/sign-in");
        else getHashtagPosts(hashtag);
    }, [hashtag, update, comments]);

    return (
        <>
            <Header />
            <S.Main>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.HashtagName># {hashtag}</S.HashtagName>
                        {loading ? (
                            <LoadingLottie />
                        ) : (
                            hashtagPosts.map(
                                ({
                                    id,
                                    username,
                                    userPic,
                                    userId,
                                    article,
                                    link,
                                    urlMetadata,
                                    comments,
                                    repostsCount,
                                    likes,
                                    countLikes,
                                    hasLiked,
                                }) => (
                                    <Post
                                        key={id}
                                        postId={id}
                                        username={username}
                                        userPic={userPic}
                                        userId={userId}
                                        article={article}
                                        link={link}
                                        urlMetadata={urlMetadata}
                                        comments={comments}
                                        repostsCount={repostsCount}
                                        usersLikes={likes}
                                        countLikes={countLikes}
                                        hasLiked={hasLiked}
                                        update={() => setUpdate(!update)}
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

export default Hashtag;
