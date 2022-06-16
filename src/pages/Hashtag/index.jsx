import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";

import * as S from "./styles";

const Hashtag = () => {
    const { hashtagPosts, getHashtagPosts } = useContext(TrendingContext);
    const { hashtag } = useParams();
    getHashtagPosts(hashtag);
    return (
        <>
            <Header />
            <S.Main>
                <S.HashtagName>#JavaScript</S.HashtagName>
                <S.PostsContainer></S.PostsContainer>
            </S.Main>
        </>
    );
};

export default Hashtag;
