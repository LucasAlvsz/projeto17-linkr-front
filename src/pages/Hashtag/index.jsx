import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

import * as S from "./styles";
import { LoadingContext } from "../../providers/LoadingProvider";
import { CommentsContext } from "../../providers/CommentsProvider";

const Hashtag = () => {
    const navigate = useNavigate();
    const { hashtagPosts, getHashtagPosts } = useContext(TrendingContext);
    const { update, setUpdate } = useContext(LoadingContext);
    const { comments } = useContext(CommentsContext);
    const { hashtag } = useParams();
    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else {
            getHashtagPosts(hashtag);
        }
    }, [hashtag, update, comments]);

    return (
        <>
            <Header />
            <S.Main>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.HashtagName># {hashtag}</S.HashtagName>
                        {hashtagPosts.map(
                            ({
                                id,
                                username,
                                userpic,
                                likes,
                                userId,
                                hasLiked,
                                article,
                                link,
                                countLikes,
                                urlMetadata,
                                comments,
                            }) => (
                                <Post
                                    key={id}
                                    postId={id}
                                    username={username}
                                    userPic={userpic}
                                    userId={userId}
                                    hasLiked={hasLiked}
                                    article={article}
                                    link={link}
                                    usersLikes={likes}
                                    countLikes={countLikes}
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

export default Hashtag;
