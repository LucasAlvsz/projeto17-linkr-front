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
                        {hashtagPosts.map(({ id, article, link }) => (
                            <Post
                                key={id}
                                image="https://i.pinimg.com/originals/5a/39/3d/5a393d60dab143a9521500b29d5edad6.jpg"
                                name={"Akali"}
                                text={article}
                                link={link}
                            />
                        ))}
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
