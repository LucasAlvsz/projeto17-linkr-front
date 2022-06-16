import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { TrendingContext } from "../../providers/TrendingProvider";

import Header from "../../components/Header";
import Post from "../../components/Post";

import * as S from "./styles";

const Hashtag = () => {
    const { hashtagPosts, getHashtagPosts } = useContext(TrendingContext);
    const { hashtag } = useParams();
    getHashtagPosts(hashtag);
    return (
        <>
            <Header />
            <S.Main>
                <S.HashtagName># {hashtag}</S.HashtagName>
                <S.PostsContainer>
                    {hashtagPosts.map(({ id, name, article, link }) => (
                        <Post
                            key={id}
                            image="https://i.pinimg.com/originals/5a/39/3d/5a393d60dab143a9521500b29d5edad6.jpg"
                            name={name}
                            article={article}
                            link={link}
                        />
                    ))}
                </S.PostsContainer>
            </S.Main>
        </>
    );
};

export default Hashtag;
