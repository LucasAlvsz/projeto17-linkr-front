import React from "react";
import { useContext, useEffect, useState } from "react";
import * as S from "./style";
import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";
import { TimelineContext } from "../../providers/timelineProvider";
const Timeline = () => {
    const { DataPosts, catchPosts } = useContext(TimelineContext);
    // eslint-disable-next-line no-unused-vars
    const [reload, setReload] = useState(false);
    useEffect(() => {
        catchPosts();
        console.log(reload);
    }, [reload]);
    return (
        <>
            <Header />
            <S.Main>
                <S.TimelineContainer>{"timeline"}</S.TimelineContainer>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.UserData>timeline</S.UserData>
                        <S.UserPublishContainer>
                            <UserPublish setReload={setReload} />
                        </S.UserPublishContainer>
                        {DataPosts?.map(
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
export default Timeline;
