import { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

import * as S from "./styles";

const Hashtag = () => {
    const navigate = useNavigate();
    const { hashtagPosts, getHashtagPosts } = useContext(TrendingContext);
    const { hashtag } = useParams();
    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else getHashtagPosts(hashtag);
    }, [hashtag]);

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
                                    link={link}
                                    urlMetadata={urlMetadata}
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
