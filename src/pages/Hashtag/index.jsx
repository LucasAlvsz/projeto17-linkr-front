import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";

import * as S from "./styles";

const Hashtag = () => {
    const { hashtagPosts, getHashtagPosts } = useContext(TrendingContext);
    const { hashtag } = useParams();
    useEffect(() => {
        getHashtagPosts(hashtag);
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
                                article,
                                link,
                                urlMetadata,
                            }) => (
                                <Post
                                    key={id}
                                    username={username}
                                    userpic={userpic}
                                    text={article}
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
