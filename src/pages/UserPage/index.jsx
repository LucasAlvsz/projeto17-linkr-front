import React from "react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { UserPageContext } from "../../providers/UserPageProvider";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";

import * as S from "./styles";

const UserPage = () => {
    const { userPosts, getUserPosts } = useContext(UserPageContext);
    const { id } = useParams();

    useEffect(() => {
        getUserPosts(id);
    }, [id]);

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
                                userId,
                                article,
                                link,
                                urlMetadata,
                            }) => (
                                <Post
                                    key={id}
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

export default UserPage;
