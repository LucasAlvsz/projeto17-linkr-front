import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { TimelineContext } from "../../providers/TimelineProvider";
import { LoadingContext } from "../../providers/LoadingProvider";
import isLogged from "../../utils/isLogged";

import Header from "../../components/Header";
import Post from "../../components/Post";
import Trending from "../../components/Trending";
import UserPublish from "../../components/UserPublish";

import * as S from "./style";

const Timeline = () => {
    const navigate = useNavigate();
    const { DataPosts, catchPosts } = useContext(TimelineContext);
    const { update } = useContext(LoadingContext);
    useEffect(() => {
        if (!isLogged()) navigate("/sign-in");
        else catchPosts();
    }, [update]);
    return (
        <>
            <Header />
            <S.Main>
                <S.TimelineContainer>{"timeline"}</S.TimelineContainer>
                <S.ContentContainer>
                    <S.PostsContainer>
                        <S.UserData>timeline</S.UserData>
                        <S.UserPublishContainer>
                            <UserPublish />
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
export default Timeline;
