import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

import * as S from "./styles";
import { LoadingContext } from "../../providers/LoadingProvider";
import { LikeContext } from "../../providers/LikeProvider";

const Hashtag = () => {
    const navigate = useNavigate();
    const { hashtagPosts, getHashtagPosts } = useContext(TrendingContext);
    const { getLikes, filterLikesPost } = useContext(LikeContext);
    const { update, setUpdate } = useContext(LoadingContext);
    const { hashtag } = useParams();
    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else {
            getHashtagPosts(hashtag);
            getLikes();
        }
    }, [hashtag, update]);

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
                                userId,
                                article,
                                likes,
                                link,
                                urlMetadata,
                            }) => (
                                <Post
                                    key={id}
                                    postId={id}
                                    username={username}
                                    userpic={userpic}
                                    userid={userId}
                                    article={article}
                                    likes={likes}
                                    usersLikes={filterLikesPost(id)}
                                    link={link}
                                    urlMetadata={urlMetadata}
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
